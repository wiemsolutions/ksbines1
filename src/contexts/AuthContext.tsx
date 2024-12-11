import { createContext, useContext, ReactNode, useState } from 'react';
import { sendAdminNotification } from '../utils/emailNotifications';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  register: (data: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, password: string) => {
    // Here you would typically make an API call to authenticate
    setIsAuthenticated(true);
  };

  const register = async (data: any) => {
    // Here you would typically make an API call to register the user
    console.log('Registration data:', data);
    
    // Send admin notification about new user
    await sendAdminNotification('newUser', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      companyName: data.companyName
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
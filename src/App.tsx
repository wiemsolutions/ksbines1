import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import AllListingsPage from './pages/AllListingsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddListingPage from './pages/AddListingPage';
import UserPanelPage from './pages/UserPanelPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import SubscriptionPackagesPage from './pages/SubscriptionPackagesPage';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import CookieConsent from './components/CookieConsent';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/listing/:id" element={<ListingPage />} />
              <Route path="/listings" element={<AllListingsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/add-listing" element={<AddListingPage />} />
              <Route path="/user-panel" element={<UserPanelPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/packages" element={<SubscriptionPackagesPage />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
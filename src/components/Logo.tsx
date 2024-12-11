import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Logo() {
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Preload the image to check if it exists
    const img = new Image();
    img.onerror = () => setLogoError(true);
    img.src = '/logo.png';
  }, []);

  if (logoError) {
    // Fallback text-based logo if image fails to load
    return (
      <Link to="/" className="flex items-center">
        <span className="text-2xl font-bold">
          <span className="text-[#4CAF50]">KS</span>
          <span className="text-[#0284c7]">BIZNES</span>
        </span>
      </Link>
    );
  }

  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/logo.png" 
        alt="KSBiznes" 
        className="h-8 w-auto"
        onError={() => setLogoError(true)}
      />
    </Link>
  );
}
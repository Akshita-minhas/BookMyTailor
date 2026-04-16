import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, User, LogOut, Scissors } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-dark">BookMyTailor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-dark hover:text-primary-600 transition-colors">Home</Link>
            <Link to="/services" className="text-dark hover:text-primary-600 transition-colors">Services</Link>
            <Link to="/tailors" className="text-dark hover:text-primary-600 transition-colors">Tailors</Link>
            <Link to="/about" className="text-dark hover:text-primary-600 transition-colors">About Us</Link>
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-dark hover:text-primary-600">
                  <span>{user.name}</span>
                  <User className="h-5 w-5" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-dark hover:bg-primary-50">Profile</Link>
                  <Link to="/history" className="block px-4 py-2 text-sm text-dark hover:bg-primary-50">Order History</Link>
                  <button 
                    onClick={handleLogout} 
                    className="block w-full text-left px-4 py-2 text-sm text-dark hover:bg-primary-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="btn btn-outline">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/" className="block py-2 text-dark hover:text-primary-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="block py-2 text-dark hover:text-primary-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/tailors" className="block py-2 text-dark hover:text-primary-600" onClick={() => setIsMenuOpen(false)}>Tailors</Link>
            <Link to="/about" className="block py-2 text-dark hover:text-primary-600" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            
            {user ? (
              <>
                <Link to="/profile" className="block py-2 text-dark hover:text-primary-600" onClick={() => setIsMenuOpen(false)}>Profile</Link>
                <Link to="/history" className="block py-2 text-dark hover:text-primary-600" onClick={() => setIsMenuOpen(false)}>Order History</Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }} 
                  className="flex items-center py-2 text-dark hover:text-primary-600"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login" className="btn btn-outline text-center" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/register" className="btn btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
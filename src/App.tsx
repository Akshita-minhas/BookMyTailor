import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TailorsPage from './pages/TailorsPage';
import TailorProfilePage from './pages/TailorProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import BookingPage from './pages/BookingPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';
import axios from 'axios';

function App() {
  const { loading } = useAuth();

  // Set up axios interceptor for error handling
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      response => response,
      error => {
        // Handle session expiration
        if (error.response && error.response.status === 401) {
          // You could redirect to login or refresh token here
          console.log('Session expired or unauthorized');
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Clean up interceptor when component unmounts
      axios.interceptors.response.eject(interceptor);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow animate-fadeIn">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tailors" element={<TailorsPage />} />
          <Route path="/tailors/:id" element={<TailorProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProtectedRoute><UserProfilePage /></ProtectedRoute>} />
          <Route path="/booking/:tailorId" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
          <Route path="/history" element={<ProtectedRoute><OrderHistoryPage /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
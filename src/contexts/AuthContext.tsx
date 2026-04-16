import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'tailor' | 'admin';
  profilePicture?: string;
  phone?: string;
  address?: string;
  bio?: string;
  measurements?: {
    chest?: string;
    waist?: string;
    hips?: string;
    shoulderWidth?: string;
    sleeveLength?: string;
    inseam?: string;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: 'user' | 'tailor') => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Set up axios defaults
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Accept'] = 'application/json';

// Add request interceptor
axios.interceptors.request.use(
  (config) => {
    // You can add any request preprocessing here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error
      console.error('Server Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request was made but no response
      console.error('Network Error:', error.request);
      return Promise.reject({ message: 'Network error. Please check your connection.' });
    } else {
      // Something else happened
      console.error('Error:', error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await axios.get('/users/me');
        setUser(res.data);
      } catch (error) {
        console.log('Not logged in');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post('/auth/login', { email, password });
      setUser(res.data.user);
      toast.success('Logged in successfully');
    } catch (error: any) {
      const message = error.message || 'Failed to login. Please check your credentials.';
      toast.error(message);
      throw new Error(message);
    }
  };

  const register = async (name: string, email: string, password: string, role: 'user' | 'tailor') => {
    try {
      const res = await axios.post('/auth/register', { name, email, password, role });
      setUser(res.data.user);
      toast.success('Registration successful');
    } catch (error: any) {
      const message = error.message || 'Registration failed. Please try again.';
      toast.error(message);
      throw new Error(message);
    }
  };

  const logout = async () => {
    try {
      await axios.post('/auth/logout');
      setUser(null);
      toast.success('Logged out successfully');
    } catch (error: any) {
      const message = error.message || 'Logout failed';
      toast.error(message);
      throw new Error(message);
    }
  };

  const updateProfile = async (userData: Partial<User>) => {
    try {
      const res = await axios.put('/users/profile', userData);
      setUser(res.data);
      toast.success('Profile updated successfully');
    } catch (error: any) {
      const message = error.message || 'Profile update failed';
      toast.error(message);
      throw new Error(message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
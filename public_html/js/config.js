/**
 * Application Configuration
 * Central configuration for API endpoints and app settings
 */

// API Base URL - Change this to your backend URL
const API_BASE_URL = 'http://localhost:5000/api';

// Export configuration
const config = {
  API_URL: API_BASE_URL,
  
  // API Endpoints
  endpoints: {
    // Auth
    login: `${API_BASE_URL}/auth/login`,
    signup: `${API_BASE_URL}/auth/signup`,
    me: `${API_BASE_URL}/auth/me`,
    updateProfile: `${API_BASE_URL}/auth/updateprofile`,
    updatePassword: `${API_BASE_URL}/auth/updatepassword`,
    
    // Bonds
    bonds: `${API_BASE_URL}/bonds`,
    bondById: (id) => `${API_BASE_URL}/bonds/${id}`,
    
    // Bond IPOs
    bondIPOs: `${API_BASE_URL}/bond-ipos`,
    bondIPOById: (id) => `${API_BASE_URL}/bond-ipos/${id}`,
  },
  
  // App Settings
  settings: {
    tokenKey: 'unibonds_token',
    userKey: 'unibonds_user',
    itemsPerPage: 12,
  }
};

// Make config available globally
window.AppConfig = config;


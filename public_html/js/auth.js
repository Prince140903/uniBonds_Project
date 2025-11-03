/**
 * Authentication Utilities
 * Handles user authentication, token management, and API requests
 */

const API_URL = 'http://localhost:5000/api';

// Check if user is logged in
function isLoggedIn() {
  const token = localStorage.getItem('token');
  return token !== null && token !== undefined;
}

// Get current user
function getCurrentUser() {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

// Get auth token
function getAuthToken() {
  return localStorage.getItem('token');
}

// Logout user
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  // Show success message
  showNotification('Logged out successfully', 'success');
  
  // Redirect to login
  setTimeout(() => {
    window.location.href = '/login.html';
  }, 1000);
}

// Make authenticated API request
async function authenticatedFetch(url, options = {}) {
  const token = getAuthToken();
  
  if (!token) {
    throw new Error('No authentication token found');
  }
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers,
  };
  
  const response = await fetch(url, {
    ...options,
    headers,
  });
  
  // If unauthorized, redirect to login
  if (response.status === 401) {
    logout();
    return;
  }
  
  return response;
}

// Update user profile
async function updateProfile(name, email, phone) {
  try {
    const response = await authenticatedFetch(`${API_URL}/auth/updateprofile`, {
      method: 'PUT',
      body: JSON.stringify({ name, email, phone }),
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Update stored user data
      const user = getCurrentUser();
      const updatedUser = { ...user, ...data.data };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      // Update UI
      updateUserUI();
    }
    
    return data;
  } catch (error) {
    console.error('Update profile error:', error);
    throw error;
  }
}

// Update password
async function updatePassword(currentPassword, newPassword) {
  try {
    const response = await authenticatedFetch(`${API_URL}/auth/updatepassword`, {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    
    const data = await response.json();
    
    if (data.success && data.data.token) {
      // Update token
      localStorage.setItem('token', data.data.token);
    }
    
    return data;
  } catch (error) {
    console.error('Update password error:', error);
    throw error;
  }
}

// Get user profile from server
async function getProfile() {
  try {
    const response = await authenticatedFetch(`${API_URL}/auth/me`);
    const data = await response.json();
    
    if (data.success) {
      // Update stored user data
      const user = getCurrentUser();
      const updatedUser = { ...user, ...data.data };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return updatedUser;
    }
    
    return null;
  } catch (error) {
    console.error('Get profile error:', error);
    throw error;
  }
}

// Update user UI elements
function updateUserUI() {
  // Check if elements exist before trying to update them
  const userName = document.querySelector('.user-name');
  const userAvatar = document.querySelector('.user-avatar');
  const userMenu = document.querySelector('.user-menu');
  const authButtons = document.querySelector('.navbar-auth');
  
  // If none of these elements exist, skip the update
  if (!userName && !userAvatar && !userMenu && !authButtons) {
    return;
  }
  
  if (isLoggedIn()) {
    const user = getCurrentUser();
    
    // Update user menu
    if (userName && user) {
      userName.textContent = user.name.split(' ')[0]; // First name only
    }
    
    if (userAvatar && user) {
      userAvatar.textContent = user.name.charAt(0).toUpperCase();
    }
    
    // Show user menu, hide auth buttons
    if (userMenu) {
      userMenu.style.display = 'block';
    }
    if (authButtons) {
      authButtons.style.display = 'none';
    }
  } else {
    // Hide user menu, show auth buttons
    if (userMenu) {
      userMenu.style.display = 'none';
    }
    if (authButtons) {
      authButtons.style.display = 'flex';
    }
  }
}

// Show notification
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Format currency
function formatCurrency(amount, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Format date
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Calculate remaining tenure in human readable format
function formatTenure(months) {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years}y ${remainingMonths}m`;
  }
}

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', () => {
  // Update UI based on auth status
  updateUserUI();
  
  // Check if on a protected page
  const protectedPages = ['dashboard.html', 'profile.html', 'admin.html'];
  const currentPage = window.location.pathname.split('/').pop();
  
  if (protectedPages.includes(currentPage) && !isLoggedIn()) {
    window.location.href = '/login.html';
  }
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isLoggedIn,
    getCurrentUser,
    getAuthToken,
    logout,
    authenticatedFetch,
    updateProfile,
    updatePassword,
    getProfile,
    updateUserUI,
    showNotification,
    formatCurrency,
    formatDate,
    formatTenure,
  };
}

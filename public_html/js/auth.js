/**
 * Authentication utility functions
 */

const API_URL = 'http://localhost:5000/api';

// Check if user is logged in
function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null;
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
    window.location.href = 'login.html';
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
        }
        
        return data;
    } catch (error) {
        console.error('Get profile error:', error);
        throw error;
    }
}

// Display user info in navbar (example)
function displayUserInfo() {
    if (isLoggedIn()) {
        const user = getCurrentUser();
        const userInfoElement = document.getElementById('userInfo');
        
        if (userInfoElement && user) {
            userInfoElement.innerHTML = `
                <span>Welcome, ${user.name}</span>
                <button onclick="logout()">Logout</button>
            `;
        }
    }
}

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if on a protected page
    const protectedPages = ['dashboard.html', 'profile.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage) && !isLoggedIn()) {
        window.location.href = 'login.html';
    }
    
    // Display user info if logged in
    displayUserInfo();
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
        displayUserInfo,
    };
}


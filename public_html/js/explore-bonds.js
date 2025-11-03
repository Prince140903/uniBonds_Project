/**
 * Explore Bonds Page
 * Handles fetching, filtering, and displaying bonds
 */

// Get API URL from config or fallback
const API_URL = window.AppConfig?.API_URL || 'http://localhost:5000/api';

let currentPage = 1;
let currentFilters = {};
let debounceTimer = null;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  loadBonds();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentFilters.search = e.target.value;
        currentPage = 1;
        loadBonds();
      }, 500);
    });
  }

  // Sort select
  const sortBy = document.getElementById('sortBy');
  if (sortBy) {
    sortBy.addEventListener('change', (e) => {
      currentFilters.sort = e.target.value;
      currentPage = 1;
      loadBonds();
    });
  }

  // Apply filters button
  const applyFiltersBtn = document.getElementById('applyFilters');
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', applyFilters);
  }

  // Clear filters button
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', clearAllFilters);
  }

  // Toggle filters (mobile)
  const toggleFiltersBtn = document.getElementById('toggleFilters');
  const filtersSidebar = document.querySelector('.filters-sidebar');
  if (toggleFiltersBtn && filtersSidebar) {
    toggleFiltersBtn.addEventListener('click', () => {
      filtersSidebar.classList.toggle('active');
    });
  }
}

// Apply filters
function applyFilters() {
  currentFilters = {};

  // Get rating filters
  const ratingCheckboxes = document.querySelectorAll('input[name="rating"]:checked');
  if (ratingCheckboxes.length > 0) {
    currentFilters.rating = Array.from(ratingCheckboxes).map(cb => cb.value).join(',');
  }

  // Get coupon range
  const minCoupon = document.getElementById('minCoupon').value;
  const maxCoupon = document.getElementById('maxCoupon').value;
  if (minCoupon) currentFilters.minCoupon = minCoupon;
  if (maxCoupon) currentFilters.maxCoupon = maxCoupon;

  // Get yield range
  const minYield = document.getElementById('minYield').value;
  const maxYield = document.getElementById('maxYield').value;
  if (minYield) currentFilters.minYield = minYield;
  if (maxYield) currentFilters.maxYield = maxYield;

  // Get coupon type filters
  const couponTypeCheckboxes = document.querySelectorAll('input[name="couponType"]:checked');
  if (couponTypeCheckboxes.length > 0) {
    currentFilters.couponType = Array.from(couponTypeCheckboxes).map(cb => cb.value).join(',');
  }

  // Get security filters
  const securityCheckboxes = document.querySelectorAll('input[name="security"]:checked');
  if (securityCheckboxes.length > 0) {
    currentFilters.security = Array.from(securityCheckboxes).map(cb => cb.value).join(',');
  }

  // Get listing status filters
  const listingCheckboxes = document.querySelectorAll('input[name="listingStatus"]:checked');
  if (listingCheckboxes.length > 0) {
    currentFilters.listingStatus = Array.from(listingCheckboxes).map(cb => cb.value).join(',');
  }

  // Get search
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value) {
    currentFilters.search = searchInput.value;
  }

  // Get sort
  const sortBy = document.getElementById('sortBy');
  if (sortBy && sortBy.value) {
    currentFilters.sort = sortBy.value;
  }

  // Reset page and load bonds
  currentPage = 1;
  loadBonds();

  // Close mobile filters
  document.querySelector('.filters-sidebar')?.classList.remove('active');
}

// Clear all filters
function clearAllFilters() {
  currentFilters = {};
  currentPage = 1;

  // Reset all inputs
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.getElementById('minCoupon').value = '';
  document.getElementById('maxCoupon').value = '';
  document.getElementById('minYield').value = '';
  document.getElementById('maxYield').value = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('sortBy').value = '';

  // Reload bonds
  loadBonds();
}

// Load bonds from API
async function loadBonds() {
  const loadingState = document.getElementById('loadingState');
  const bondsGrid = document.getElementById('bondsGrid');
  const emptyState = document.getElementById('emptyState');
  const resultsCount = document.getElementById('resultsCount');

  // Show loading
  loadingState.style.display = 'flex';
  bondsGrid.style.display = 'none';
  emptyState.style.display = 'none';

  try {
    // Build query string
    const queryParams = new URLSearchParams({
      page: currentPage,
      limit: 12,
      ...currentFilters,
    });

    const response = await fetch(`${API_URL}/bonds?${queryParams}`);
    const data = await response.json();

    // Hide loading
    loadingState.style.display = 'none';

    if (data.success && data.data.length > 0) {
      // Show bonds
      bondsGrid.style.display = 'grid';
      displayBonds(data.data);
      
      // Update results count
      resultsCount.textContent = data.total;

      // Update pagination
      displayPagination(data.currentPage, data.pages);
    } else {
      // Show empty state
      emptyState.style.display = 'flex';
      resultsCount.textContent = '0';
    }
  } catch (error) {
    console.error('Error loading bonds:', error);
    loadingState.style.display = 'none';
    emptyState.style.display = 'flex';
    showNotification('Failed to load bonds. Please try again.', 'danger');
  }
}

// Display bonds
function displayBonds(bonds) {
  const bondsGrid = document.getElementById('bondsGrid');
  
  bondsGrid.innerHTML = bonds.map(bond => `
    <div class="bond-card" onclick="viewBondDetails('${bond._id}')">
      <div class="bond-card-header">
        <div class="bond-issuer">${bond.issuerName}</div>
        <h3 class="bond-name">${bond.securityName}</h3>
        <div class="bond-badges">
          <span class="badge ${getRatingBadgeClass(bond.rating)}">${bond.rating}</span>
          <span class="badge badge-gray">${bond.security}</span>
          ${bond.listingStatus === 'Listed' ? '<span class="badge badge-success">Listed</span>' : ''}
        </div>
      </div>

      <div class="bond-card-body">
        <div class="bond-metrics">
          <div class="bond-metric">
            <div class="metric-label">Coupon</div>
            <div class="metric-value">${bond.coupon}<span class="metric-suffix">%</span></div>
          </div>
          <div class="bond-metric">
            <div class="metric-label">YTM</div>
            <div class="metric-value">${bond.yieldToMaturity ? bond.yieldToMaturity.toFixed(2) : 'N/A'}<span class="metric-suffix">${bond.yieldToMaturity ? '%' : ''}</span></div>
          </div>
        </div>

        <div class="bond-details">
          <div class="bond-detail-row">
            <span class="detail-label">Face Value</span>
            <span class="detail-value">${formatCurrency(bond.faceValue)}</span>
          </div>
          <div class="bond-detail-row">
            <span class="detail-label">Coupon Type</span>
            <span class="detail-value">${bond.couponType}</span>
          </div>
          <div class="bond-detail-row">
            <span class="detail-label">Maturity</span>
            <span class="detail-value">${formatDate(bond.maturityDate)}</span>
          </div>
          <div class="bond-detail-row">
            <span class="detail-label">Remaining Tenure</span>
            <span class="detail-value">${formatTenure(bond.remainingTenure)}</span>
          </div>
        </div>
      </div>

      <div class="bond-card-footer">
        <div class="bond-footer-row">
          <div>
            <div class="bond-price">${formatCurrency(bond.currentPrice)}</div>
            <span class="price-per-unit">Current Price</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); investInBond('${bond._id}')">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Display pagination
function displayPagination(current, total) {
  const pagination = document.getElementById('pagination');
  
  if (total <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let paginationHTML = '';

  // Previous button
  paginationHTML += `
    <button class="pagination-btn" ${current === 1 ? 'disabled' : ''} onclick="goToPage(${current - 1})">
      Previous
    </button>
  `;

  // Page numbers
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 2 && i <= current + 2)) {
      paginationHTML += `
        <button class="pagination-btn ${i === current ? 'active' : ''}" onclick="goToPage(${i})">
          ${i}
        </button>
      `;
    } else if (i === current - 3 || i === current + 3) {
      paginationHTML += `<span>...</span>`;
    }
  }

  // Next button
  paginationHTML += `
    <button class="pagination-btn" ${current === total ? 'disabled' : ''} onclick="goToPage(${current + 1})">
      Next
    </button>
  `;

  pagination.innerHTML = paginationHTML;
}

// Go to page
function goToPage(page) {
  currentPage = page;
  loadBonds();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// View bond details
function viewBondDetails(bondId) {
  window.location.href = `/bond-details.html?id=${bondId}`;
}

// Invest in bond
function investInBond(bondId) {
  if (!isLoggedIn()) {
    showNotification('Please login to invest in bonds', 'warning');
    setTimeout(() => {
      window.location.href = '/login.html';
    }, 1500);
    return;
  }

  // TODO: Implement investment flow
  showNotification('Investment feature coming soon!', 'info');
}

// Get rating badge class
function getRatingBadgeClass(rating) {
  if (rating.startsWith('AAA')) return 'badge-success';
  if (rating.startsWith('AA')) return 'badge-info';
  if (rating.startsWith('A')) return 'badge-primary';
  return 'badge-warning';
}


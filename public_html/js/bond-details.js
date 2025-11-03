/**
 * Bond Details Page
 * Handles fetching and displaying comprehensive bond information
 */

// Get API URL from config or fallback
const API_URL = window.AppConfig?.API_URL || 'http://localhost:5000/api';

let currentBond = null;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  loadBondDetails();
});

// Setup tabs functionality
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      
      // Remove active class from all tabs and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding pane
      btn.classList.add('active');
      document.getElementById(tabName).classList.add('active');
    });
  });
}

// Load bond details from API
async function loadBondDetails() {
  const loadingState = document.getElementById('loadingState');
  const bondDetails = document.getElementById('bondDetails');

  // Get bond ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const bondId = urlParams.get('id');

  if (!bondId) {
    showNotification('Bond ID not found', 'danger');
    setTimeout(() => window.location.href = '/explore-bonds.html', 1500);
    return;
  }

  try {
    const response = await fetch(`${API_URL}/bonds/${bondId}`);
    const data = await response.json();

    if (data.success && data.data) {
      currentBond = data.data;
      displayBondDetails(data.data);
      
      // Hide loading, show content
      loadingState.style.display = 'none';
      bondDetails.style.display = 'block';
    } else {
      showNotification('Bond not found', 'danger');
      setTimeout(() => window.location.href = '/explore-bonds.html', 1500);
    }
  } catch (error) {
    console.error('Error loading bond details:', error);
    showNotification('Failed to load bond details', 'danger');
    setTimeout(() => window.location.href = '/explore-bonds.html', 1500);
  }
}

// Display bond details
function displayBondDetails(bond) {
  // Hero Section
  document.getElementById('breadcrumbName').textContent = bond.securityName;
  document.getElementById('bondTitle').textContent = bond.securityName;
  document.getElementById('bondIssuer').textContent = bond.issuerName;
  document.getElementById('heroPrice').textContent = formatCurrency(bond.currentPrice);
  document.getElementById('heroFaceValue').textContent = `Face Value: ${formatCurrency(bond.faceValue)}`;
  
  // Hero Badges
  const badgesHTML = `
    <span class="badge ${getRatingBadgeClass(bond.rating)}">${bond.rating}</span>
    <span class="badge badge-gray">${bond.security}</span>
    <span class="badge badge-${bond.listingStatus === 'Listed' ? 'success' : 'warning'}">${bond.listingStatus}</span>
    <span class="badge badge-primary">${bond.couponType}</span>
  `;
  document.getElementById('bondBadges').innerHTML = badgesHTML;

  // Overview Tab - Issue Details
  document.getElementById('detailIssuerName').textContent = bond.issuerName;
  document.getElementById('detailSecurityName').textContent = bond.securityName;
  document.getElementById('detailISIN').textContent = bond.isin;
  document.getElementById('detailFaceValue').textContent = formatCurrency(bond.faceValue);
  document.getElementById('detailCoupon').textContent = `${bond.coupon}%`;
  document.getElementById('detailCouponType').textContent = bond.couponType;
  document.getElementById('detailModeOfIssue').textContent = bond.modeOfIssue;
  document.getElementById('detailIPFrequency').textContent = bond.ipFrequency;
  document.getElementById('detailTaxation').textContent = bond.taxation;
  document.getElementById('detailSecurity').textContent = bond.security;
  document.getElementById('detailSeniority').textContent = bond.seniority;
  document.getElementById('detailListingStatus').textContent = bond.listingStatus;

  // Dates & Tenure
  document.getElementById('detailAllotmentDate').textContent = formatDate(bond.allotmentDate);
  document.getElementById('detailMaturityDate').textContent = formatDate(bond.maturityDate);
  document.getElementById('detailNextPaymentDate').textContent = bond.nextPaymentDate ? formatDate(bond.nextPaymentDate) : 'N/A';
  document.getElementById('detailCallDate').textContent = bond.callDate ? formatDate(bond.callDate) : 'N/A';
  document.getElementById('detailPutDate').textContent = bond.putDate ? formatDate(bond.putDate) : 'N/A';
  document.getElementById('detailTotalTenure').textContent = formatTenure(bond.totalTenure);
  document.getElementById('detailRemainingTenure').textContent = formatTenure(bond.remainingTenure);

  // Rating Information
  document.getElementById('detailRating').textContent = bond.rating;
  document.getElementById('detailRatingAgency').textContent = bond.ratingAgency;
  document.getElementById('detailRatingDate').textContent = formatDate(bond.ratingDate);
  document.getElementById('detailTrustee').textContent = bond.trustee || 'N/A';

  // Investment Metrics
  document.getElementById('detailCurrentPrice').textContent = formatCurrency(bond.currentPrice);
  document.getElementById('detailYTM').textContent = bond.yieldToMaturity ? `${bond.yieldToMaturity.toFixed(2)}%` : 'N/A';
  document.getElementById('detailMinInvestment').textContent = formatCurrency(bond.minInvestment);

  // Financials Tab
  displayFinancials(bond.financials);

  // Documents Tab
  displayDocuments(bond.documents);

  // About Issuer Tab
  document.getElementById('aboutIssuer').innerHTML = `<p>${bond.aboutIssuer}</p>`;
}

// Display financials table
function displayFinancials(financials) {
  const tbody = document.querySelector('#financialsTable tbody');
  
  if (!financials || financials.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" class="text-center">No financial data available</td></tr>';
    return;
  }

  tbody.innerHTML = financials.map(f => `
    <tr>
      <td><strong>${f.year}</strong></td>
      <td>${f.revenue ? f.revenue.toFixed(2) : 'N/A'}</td>
      <td>${f.netProfit ? f.netProfit.toFixed(2) : 'N/A'}</td>
      <td>${f.totalAssets ? f.totalAssets.toFixed(2) : 'N/A'}</td>
      <td>${f.totalLiabilities ? f.totalLiabilities.toFixed(2) : 'N/A'}</td>
      <td>${f.equity ? f.equity.toFixed(2) : 'N/A'}</td>
      <td>${f.eps ? f.eps.toFixed(2) : 'N/A'}</td>
      <td>${f.debtToEquity ? f.debtToEquity.toFixed(2) : 'N/A'}</td>
    </tr>
  `).join('');
}

// Display documents
function displayDocuments(documents) {
  const documentsGrid = document.getElementById('documentsGrid');
  
  if (!documents || (!documents.ratingRational && !documents.imKid && !documents.synopsis)) {
    documentsGrid.innerHTML = '<div class="text-center py-4"><p>No documents available</p></div>';
    return;
  }

  let documentsHTML = '';

  if (documents.ratingRational) {
    documentsHTML += createDocumentCard('Rating Rationale', 'rating-rational', documents.ratingRational);
  }

  if (documents.imKid) {
    documentsHTML += createDocumentCard('Information Memorandum / KID', 'im-kid', documents.imKid);
  }

  if (documents.synopsis) {
    documentsHTML += createDocumentCard('Synopsis', 'synopsis', documents.synopsis);
  }

  documentsGrid.innerHTML = documentsHTML;
}

// Create document card
function createDocumentCard(name, type, url) {
  return `
    <a href="${url}" target="_blank" class="document-card">
      <div class="document-icon">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      </div>
      <div class="document-info">
        <div class="document-name">${name}</div>
        <div class="document-type">PDF Document</div>
      </div>
    </a>
  `;
}

// Invest now
function investNow() {
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

// Download prospectus
function downloadProspectus() {
  if (!currentBond || !currentBond.documents || !currentBond.documents.imKid) {
    showNotification('Prospectus not available', 'warning');
    return;
  }

  window.open(currentBond.documents.imKid, '_blank');
}

// Get rating badge class
function getRatingBadgeClass(rating) {
  if (rating.startsWith('AAA')) return 'badge-success';
  if (rating.startsWith('AA')) return 'badge-info';
  if (rating.startsWith('A')) return 'badge-primary';
  return 'badge-warning';
}


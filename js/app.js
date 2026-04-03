/* ============================================
   GOLDEN COLLECTION — Core App Logic
   ============================================ */

// --- Toast Notification System ---
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('hide'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// --- Navigation ---
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar && navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Active page highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// --- Search ---
function initSearch() {
  const searchBtn = document.querySelector('.search-toggle');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.querySelector('.search-input');
  const searchClose = document.querySelector('.search-close');
  const searchResults = document.querySelector('.search-results');

  if (!searchBtn || !searchOverlay) return;

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput && searchInput.focus(), 300);
  });

  const closeSearch = () => {
    searchOverlay.classList.remove('active');
    if (searchInput) searchInput.value = '';
    if (searchResults) { searchResults.classList.remove('active'); searchResults.innerHTML = ''; }
  };

  if (searchClose) searchClose.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) closeSearch(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (query.length < 2) {
        searchResults && searchResults.classList.remove('active');
        return;
      }
      const results = searchProducts(query).slice(0, 8);
      if (results.length > 0 && searchResults) {
        searchResults.classList.add('active');
        searchResults.innerHTML = results.map(p => `
          <a href="product.html?id=${p.id}" class="search-result-item">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="result-info">
              <h4>${p.brand} — ${p.name}</h4>
              <p>${formatPrice(p.price)}</p>
            </div>
          </a>
        `).join('');
      } else if (searchResults) {
        searchResults.classList.add('active');
        searchResults.innerHTML = '<div class="search-result-item"><div class="result-info"><h4>No products found</h4></div></div>';
      }
    });
  }
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
    observer.observe(el);
  });
}

// --- Product Card HTML Generator ---
function createProductCard(product) {
  const discount = getDiscountPercent(product.originalPrice, product.price);
  const isWishlisted = wishlist.has(product.id);
  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-card-image">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
        ${discount > 0 ? `<span class="product-badge">${discount}% OFF</span>` : ''}
        <div class="product-card-actions">
          <button class="wishlist-btn" data-wishlist-id="${product.id}" onclick="wishlist.toggle(${product.id})" title="Add to Wishlist">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <button onclick="quickView(${product.id})" title="Quick View">
            <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </div>
      </div>
      <div class="product-card-info">
        <div class="product-card-brand">${product.brand}</div>
        <h3 class="product-card-name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-card-price">
          ${formatPrice(product.price)}
          ${product.originalPrice > product.price ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-card-rating">
          <span class="stars">${getStarsHTML(product.rating)}</span>
          <span class="count">(${product.reviews})</span>
        </div>
      </div>
      <button class="quick-add-btn" onclick="quickAddToCart(${product.id})">Add to Cart</button>
    </div>
  `;
}

function quickAddToCart(productId) {
  const product = getProductById(productId);
  if (product) {
    const defaultSize = product.sizes[0];
    cart.add(productId, defaultSize);
  }
}

function quickView(productId) {
  window.location.href = `product.html?id=${productId}`;
}

// --- Navbar HTML (shared across pages) ---
function getNavbarHTML() {
  return `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="logo">
        <svg class="logo-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2 L26 14 L38 14 L28 22 L32 36 L20 28 L8 36 L12 22 L2 14 L14 14 Z" fill="currentColor" opacity="0.3"/>
          <path d="M20 6 L8 18 L12 16 L16 20 L20 10 L24 20 L28 16 L32 18 Z" fill="currentColor"/>
          <circle cx="20" cy="26" r="4" fill="currentColor" opacity="0.6"/>
        </svg>
        <div class="logo-text">GOLDEN<br>COLLECTION<span>Men's Luxury Fashion</span></div>
      </a>
      <div class="nav-links" id="navLinks">
        <a href="index.html">Home</a>
        <a href="shop.html">Shop</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="nav-icons">
        <button class="nav-icon search-toggle" title="Search" aria-label="Search">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
        </button>
        <a href="wishlist.html" class="nav-icon" title="Wishlist" aria-label="Wishlist">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span class="badge wishlist-badge">0</span>
        </a>
        <a href="cart.html" class="nav-icon" title="Cart" aria-label="Cart">
          <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 01-8 0"></path></svg>
          <span class="badge cart-badge">0</span>
        </a>
        <a href="login.html" class="nav-icon auth-login-link" title="Account" aria-label="Account">
          <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </a>
        <div class="nav-icon auth-user-menu" style="display:none;" title="Account">
          <div class="user-avatar" onclick="toggleUserDropdown()"><span class="auth-user-initials"></span></div>
          <div class="user-dropdown" id="userDropdown">
            <div class="user-dropdown-name auth-user-name"></div>
            <a href="#" onclick="auth.logout(); return false;">Logout</a>
          </div>
        </div>
        <div class="menu-toggle" id="menuToggle">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </nav>
  <!-- Search Overlay -->
  <div class="search-overlay">
    <div class="search-box">
      <input type="text" class="search-input" placeholder="Search for brands, products...">
      <button class="search-close">✕</button>
      <div class="search-results"></div>
    </div>
  </div>
  `;
}

function toggleUserDropdown() {
  const dd = document.getElementById('userDropdown');
  if (dd) dd.classList.toggle('active');
}

// --- Footer HTML (shared across pages) ---
function getFooterHTML() {
  return `
  <!-- Newsletter -->
  <section class="newsletter-section section">
    <div class="container">
      <div class="newsletter-content">
        <h2 class="section-title">Join the <span class="gold-text">Elite</span></h2>
        <p class="section-subtitle">Subscribe for exclusive offers, new arrivals, and luxury fashion insights</p>
        <form class="newsletter-form" onsubmit="handleNewsletter(event)">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <div class="logo-text">GOLDEN<br>COLLECTION<span>Men's Luxury Fashion</span></div>
          </a>
          <p>Your destination for premium men's fashion. We curate the finest luxury brands to elevate your wardrobe with timeless style and unmatched quality.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.94 29.94 0 001 11.75a30 30 0 00.46 5.33A2.78 2.78 0 003.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29.94 29.94 0 00.46-5.25 29.9 29.9 0 00-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#000"/></svg></a>
          </div>
        </div>
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop All</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Categories</h4>
          <ul>
            <li><a href="shop.html?category=casual">Casual Wear</a></li>
            <li><a href="shop.html?category=formal">Formal Wear</a></li>
            <li><a href="shop.html?category=streetwear">Streetwear</a></li>
            <li><a href="shop.html?category=accessories">Accessories</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Golden Collection. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input && input.value) {
    showToast('Thank you for subscribing!', 'success');
    input.value = '';
  }
}

// --- Init on DOM ready ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearch();
  initScrollAnimations();
  cart.updateBadge();
  wishlist.updateBadge();
  auth.updateUI();
  wishlist.updateAllButtons();
  document.body.classList.add('page-transition');
});

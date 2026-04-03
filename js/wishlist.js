/* ============================================
   GOLDEN COLLECTION — Wishlist System
   ============================================ */

class Wishlist {
  constructor() {
    this.items = this.load();
    this.listeners = [];
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('gc_wishlist')) || [];
    } catch {
      return [];
    }
  }

  save() {
    localStorage.setItem('gc_wishlist', JSON.stringify(this.items));
    this.notify();
  }

  notify() {
    this.listeners.forEach(fn => fn(this.items));
    this.updateBadge();
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  updateBadge() {
    const badges = document.querySelectorAll('.wishlist-badge');
    const count = this.items.length;
    badges.forEach(badge => {
      badge.textContent = count;
      badge.classList.toggle('show', count > 0);
    });
  }

  toggle(productId) {
    const product = getProductById(productId);
    if (!product) return;

    if (this.has(productId)) {
      this.items = this.items.filter(id => id !== productId);
      showToast(`${product.name} removed from wishlist`, 'info');
    } else {
      this.items.push(productId);
      showToast(`${product.name} added to wishlist`, 'success');
    }
    this.save();
    this.updateButtons(productId);
  }

  has(productId) {
    return this.items.includes(productId);
  }

  remove(productId) {
    this.items = this.items.filter(id => id !== productId);
    this.save();
  }

  getItems() {
    return this.items.map(id => getProductById(id)).filter(Boolean);
  }

  getCount() {
    return this.items.length;
  }

  clear() {
    this.items = [];
    this.save();
  }

  updateButtons(productId) {
    const buttons = document.querySelectorAll(`[data-wishlist-id="${productId}"]`);
    buttons.forEach(btn => {
      btn.classList.toggle('wishlisted', this.has(productId));
    });
  }

  updateAllButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = parseInt(btn.dataset.wishlistId);
      btn.classList.toggle('wishlisted', this.has(id));
    });
  }
}

// Global wishlist instance
const wishlist = new Wishlist();

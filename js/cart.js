/* ============================================
   GOLDEN COLLECTION — Cart System
   ============================================ */

class Cart {
  constructor() {
    this.items = this.load();
    this.listeners = [];
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('gc_cart')) || [];
    } catch {
      return [];
    }
  }

  save() {
    localStorage.setItem('gc_cart', JSON.stringify(this.items));
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
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.classList.toggle('show', count > 0);
    });
  }

  add(productId, size, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return false;

    const existingIndex = this.items.findIndex(
      item => item.productId === productId && item.size === size
    );

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        productId,
        size,
        quantity,
        addedAt: Date.now()
      });
    }

    this.save();
    showToast(`${product.name} added to cart`, 'success');
    return true;
  }

  remove(productId, size) {
    this.items = this.items.filter(
      item => !(item.productId === productId && item.size === size)
    );
    this.save();
  }

  updateQuantity(productId, size, quantity) {
    const item = this.items.find(
      item => item.productId === productId && item.size === size
    );
    if (item) {
      if (quantity <= 0) {
        this.remove(productId, size);
      } else {
        item.quantity = quantity;
        this.save();
      }
    }
  }

  clear() {
    this.items = [];
    this.save();
  }

  getCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotal() {
    return this.items.reduce((sum, item) => {
      const product = getProductById(item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  getSubtotal() {
    return this.getTotal();
  }

  getOriginalTotal() {
    return this.items.reduce((sum, item) => {
      const product = getProductById(item.productId);
      return sum + (product ? product.originalPrice * item.quantity : 0);
    }, 0);
  }

  getSavings() {
    return this.getOriginalTotal() - this.getTotal();
  }

  getItems() {
    return this.items.map(item => ({
      ...item,
      product: getProductById(item.productId)
    })).filter(item => item.product);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Global cart instance
const cart = new Cart();

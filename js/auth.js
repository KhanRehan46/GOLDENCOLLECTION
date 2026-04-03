/* ============================================
   GOLDEN COLLECTION — Authentication System
   ============================================ */

class Auth {
  constructor() {
    this.currentUser = this.loadSession();
  }

  loadSession() {
    try { return JSON.parse(localStorage.getItem('gc_session')); } catch { return null; }
  }

  getUsers() {
    try { return JSON.parse(localStorage.getItem('gc_users')) || []; } catch { return []; }
  }

  saveUsers(users) { localStorage.setItem('gc_users', JSON.stringify(users)); }

  signup(name, email, password) {
    const users = this.getUsers();
    if (users.find(u => u.email === email.toLowerCase())) {
      return { success: false, message: 'An account with this email already exists.' };
    }
    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters.' };
    }
    const user = { id: Date.now(), name: name.trim(), email: email.toLowerCase().trim(), password, createdAt: new Date().toISOString() };
    users.push(user);
    this.saveUsers(users);
    this.setSession(user);
    return { success: true, message: 'Account created successfully!', user };
  }

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email.toLowerCase().trim() && u.password === password);
    if (!user) return { success: false, message: 'Invalid email or password.' };
    this.setSession(user);
    return { success: true, message: `Welcome back, ${user.name}!`, user };
  }

  setSession(user) {
    const session = { id: user.id, name: user.name, email: user.email };
    localStorage.setItem('gc_session', JSON.stringify(session));
    this.currentUser = session;
    this.updateUI();
  }

  logout() {
    localStorage.removeItem('gc_session');
    this.currentUser = null;
    this.updateUI();
    showToast('You have been logged out', 'info');
  }

  isLoggedIn() { return this.currentUser !== null; }
  getUser() { return this.currentUser; }

  getInitials() {
    if (!this.currentUser) return '';
    return this.currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  updateUI() {
    const loginLinks = document.querySelectorAll('.auth-login-link');
    const userMenus = document.querySelectorAll('.auth-user-menu');
    const userNames = document.querySelectorAll('.auth-user-name');
    const userInitials = document.querySelectorAll('.auth-user-initials');
    if (this.isLoggedIn()) {
      loginLinks.forEach(el => el.style.display = 'none');
      userMenus.forEach(el => el.style.display = 'flex');
      userNames.forEach(el => el.textContent = this.currentUser.name);
      userInitials.forEach(el => el.textContent = this.getInitials());
    } else {
      loginLinks.forEach(el => el.style.display = '');
      userMenus.forEach(el => el.style.display = 'none');
    }
  }
}

const auth = new Auth();

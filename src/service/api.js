class Api {
  static BASE_URL = 'https://connections-api.herokuapp.com';

  constructor() {
    this.token = null;
  }

  async fetch(url, { method = 'GET', body } = {}) {
    const response = await fetch(`${Api.BASE_URL}${url}`, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token && `Bearer ${this.token}`,
      },
    });

    if (!response.ok)
      throw new Error(`${response.status}: ${response.statusText}`);

    return await response.json();
  }

  setToken(token) {
    this.token = token;
  }

  resetToken() {
    this.token = null;
  }

  async fetchContacts() {
    return await this.fetch('/contacts');
  }

  async addContact(contact) {
    return await this.fetch('/contacts', {
      method: 'POST',
      body: JSON.stringify(contact),
    });
  }

  async deleteContact(id) {
    const deletedContact = await this.fetch(`/contacts/${id}`, {
      method: 'DELETE',
    });

    return deletedContact.id;
  }

  async registerUser(user) {
    return await this.fetch('/users/signup', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }

  async loginUser(user) {
    return await this.fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }

  async logout() {
    return await this.fetch('/users/logout', {
      method: 'POST',
    });
  }

  async getCurrentUser() {
    return await this.fetch('/users/current');
  }
}

export default new Api();

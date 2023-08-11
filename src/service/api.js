export default class Api {
  static BASE_URL = 'https://connections-api.herokuapp.com';

  constructor(token) {
    this.token = token;
  }

  async fetch(url, { method = 'GET', body } = {}) {
    const response = await fetch(`${Api.BASE_URL}${url}`, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok)
      throw new Error(`${response.status}: ${response.statusText}`);

    return await response.json();
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
}

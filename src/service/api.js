export default class Api {
  static BASE_URL = 'https://64ce4f770c01d81da3eeafa2.mockapi.io/api';

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
    const contacts = await this.fetch('/contacts');

    return contacts;
  }

  async addContact(contact) {
    const newContact = await this.fetch('/contacts', {
      method: 'POST',
      body: JSON.stringify(contact),
    });

    return newContact;
  }

  async deleteContact(id) {
    const deletedContact = await this.fetch(`/contacts/${id}`, {
      method: 'DELETE',
    });

    return deletedContact.id;
  }
}

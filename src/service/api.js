const BASE_URL = 'https://64ce4f770c01d81da3eeafa2.mockapi.io/api';

export const fetchAllContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);

  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);

  const contacts = await response.json();

  return contacts;
};

export const addContactOnServer = async contact => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });

  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);

  const newContact = await response.json();

  return newContact;
};

export const deleteContactOnServer = async id => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);

  const deletedContact = await response.json();

  return deletedContact.id;
};

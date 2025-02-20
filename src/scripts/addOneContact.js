import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    //initializing empty contact list from the db
    const contacts = await readContacts();

    //creating a new contact
    const newContact = createFakeContact();

    //adding the new contact to the contact list
    contacts.push(newContact);

    //adding to the contacts db
    await writeContacts(contacts);
  } catch (error) {
    console.log('Error in creating one contact: ', error.message);
  }
};

addOneContact();

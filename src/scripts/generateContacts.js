import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    //initializing empty contact list from the db
    const contacts = await readContacts();

    // iteration over the right number of contacts
    for (let i = 0; i < number; i++) {
      //creating and adding to the list
      const contact = createFakeContact();
      contacts.push(contact);
    }

    //adding to the contacts db
    await writeContacts(contacts);
  } catch (error) {
    console.log('Error in generating contacts: ', error.message);
  }
};

generateContacts(2);

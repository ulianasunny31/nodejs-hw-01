import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    //setting the db contacts list back to []
    await writeContacts([]);
  } catch (error) {
    console.log('Error in removing all contacts: ', error.message);
  }
};

removeAllContacts();

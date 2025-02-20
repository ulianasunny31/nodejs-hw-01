import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    //using pop() to remove the last element of the list and setting contacts to the renewed version
    const contacts = await readContacts();
    contacts.pop();
    await writeContacts(contacts);
  } catch (error) {
    console.log('Error in getting all contacts: ', error.message);
  }
};

removeLastContact();

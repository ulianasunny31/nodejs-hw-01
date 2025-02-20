import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    //getting the length of the contacts list from the db
    const contacts = await readContacts();
    return `Number of contacts: ${contacts.length}`;
  } catch (error) {
    console.log('Error in getting the number of contacts: ', error.message);
  }
};

console.log(await countContacts());

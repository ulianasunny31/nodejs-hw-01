import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    //getting the list from the db
    const res = await readContacts();
    return res;
  } catch (error) {
    console.log('Error in getting all contacts: ', error.message);
  }
};

console.log(await getAllContacts());

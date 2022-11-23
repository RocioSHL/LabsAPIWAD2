import userModel from '../api/users/userModel';
import users from './users';
import genres from './genres';
import genresModel from '../api/genres/genresModel';
import dotenv from 'dotenv';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}
async function loadGenres()
{
    console.log('load genres Data');
    try {
      await genresModel.deleteMany();
      await genresModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genres Data: ${err}`);
    }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
}

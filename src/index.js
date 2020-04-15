import {config} from 'dotenv';
import {startServer} from './express';
import {connectToDB} from './lib/db';

async function main() {
  config();

  console.log('Connecting to DB...');
  await connectToDB(process.env.SHOPIXEL_DB_URL);

  console.log('Starting Web server...');
  await startServer(process.env.PORT || 3000);

  console.log('Application started.');
}

main()
  .catch(error => {
    console.error('Uncaught error : ' + error);
    process.exit(1);
  });

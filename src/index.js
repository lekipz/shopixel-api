import {config} from 'dotenv';
import {startServer} from './express';
import {connectToDB} from './lib/db';

const PORT = process.env.PORT || 3000;

async function main() {
  config();

  console.log('Connecting to DB...');
  await connectToDB(process.env.SHOPIXEL_DB_URL);

  console.log('Starting Web server...');
  await startServer(PORT);

  console.log(`Application started on port ${PORT}.`);
}

main()
  .catch(error => {
    console.error('Uncaught error : ' + error);
    process.exit(1);
  });

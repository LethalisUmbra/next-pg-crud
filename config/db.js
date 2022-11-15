// Proper way to initialize and share the Database object

// Loading and initializing the library:
const pgp = require('pg-promise')({
  noWarnings: true
})

// Preparing the connection details:
const cn = 'postgres://postgres:Anibal2k22@localhost:5432/nextcrud';

// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
export { db };
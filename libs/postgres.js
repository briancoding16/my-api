const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'brian',
    password: 'admin123',
    database: 'my_app'
  })


module.exports = pool;
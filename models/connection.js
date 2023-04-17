import mysql2 from 'mysql2'

const db = mysql2.createPool({
  host: 'localhost',
  user:'root',
  // password: '',
  database:'socialMediaApp',
})

export default db
import mysql2 from 'mysql2'

export const db = mysql2.createPool({
  host: 'localhost',
  user:'root',
  password: '',
  database:'socialMediaAPI',
})
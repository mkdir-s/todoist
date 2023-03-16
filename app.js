const express = require('express');
const mysql = reuqire('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mern-todoist'
})

conn.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('db connected');
  }
})
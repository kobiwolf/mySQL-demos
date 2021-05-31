const express = require('express');
const db = require('./db/mysql');
const app = express();
const User = require('./models/models');

app.use(express.json());

const port = 3001;
app.get('/select', async (req, res) => {
  User.forge()
    .fetchAll()
    .then((a) => res.send(a))
    .catch((e) => console.log(e));
  // db.query('SELECT * from users')
  //   .then((a) => res.send(a[0]))
  //   .catch((err) => res.send(err));
});
app.get('/update', async (req, res) => {
  new User()
    .where({ name: 'day' })
    .save({ age: 100 }, { patch: true })
    .then((a) => res.send(a))
    .catch((e) => console.log(e));
});
app.post('/save', async (req, res) => {
  User.forge()
    .save({ name: 'check', age: 100, id: 1 })
    .then((a) => res.send(a))
    .catch((e) => console.log(e));
});

const b = { name: 'shani', age: 16 };
app.get('/add2', async (req, res) => {
  db.query('insert into users set ?', b)
    .then((a) => res.send(a[0]))
    .catch((err) => res.send(err));
});
app.delete('/', async (req, res) => {
  const { name } = req.query;
  new User()
    .where({ name })
    .destroy()
    .then((a) => res.send(a))
    .catch((e) => console.log(e));
});
app.get('/try', async (req, res) => {
  res.send(new User().has('requireFetch'));
});
app.listen(3001, () => {
  console.log(`we are live at ${port}`);
});

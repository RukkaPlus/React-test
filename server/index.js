const express = require('express');
const path    = require('path');
const sqlite3 = require('sqlite3');
const app     = express();
const db      = new sqlite3.Database(path.join(__dirname, 'database.db'));
const port    = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

// Create a table into the database
db.serialize(() => db.run(`CREATE table IF NOT EXISTS cupcakes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  colour TEXT,
  flavour TEXT
)`));

app.get('/api/cupcakes', (req, res) => {
  db.serialize(() => {
    db.all("SELECT * FROM cupcakes", (err, rows) => {
      if (err || rows.length == 0)
        res.status(400);
      else
        res.json(rows);
    });
  });
});

app.get('/api/cupcakes/:id', (req, res) => {
  db.serialize(() => {
    db.get(`SELECT * FROM cupcakes WHERE id = ${req.params.id}`, (err, row) => {
      if (err) {
        res.status(404);
      } else
        res.json(row);
    });
  });
});

app.put('/api/cupcakes/new', (req, res) => {
  db.serialize(() => {
    db.run('INSERT INTO cupcakes VALUES (null, ?, ?)', req.body['cupcolor'], req.body['cupflavour'], err => {
      if (err)
        res.status(400);
      else
        res.redirect('/cupcakes');
    });
  });
});

app.listen(port, err => {
  if (err)
    console.error(err);
  else
    console.log(`Server in http://localhost:${port}`);
});

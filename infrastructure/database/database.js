var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('car.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(function () {
  db.run('CREATE TABLE IF NOT EXISTS car (id INTEGER PRIMARY KEY AUTOINCREMENT, color CHAR(50), engine_id INTEGER REFERENCES engine(id))');
  db.run('CREATE TABLE IF NOT EXISTS wheel (id INTEGER PRIMARY KEY AUTOINCREMENT, width INTEGER, diameter INTEGER, car_id INTEGER REFERENCES car(id))');
  db.run('CREATE TABLE IF NOT EXISTS engine (id INTEGER PRIMARY KEY AUTOINCREMENT, cc INTEGER, make CHAR(50))');
});

module.exports = {db};

const {db} = require('../../database/database');

const CarRESTList = (req, res) => {
  db.all('SELECT * from car', [], (err, rows) => {
    if (err) {
      console.error(err.stack);
      res.status(500).send('Something broke while listing!');
    }
    res.send(rows);
  });
};

module.exports = {CarRESTList};

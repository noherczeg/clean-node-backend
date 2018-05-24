const { db } = require('../database');
const { Car } = require('../domain/Car');

const CarRESTCreate = (req, res) => {
    const { color, engine } = req.body;
    try {
        const car = Car.createDefault(color, engine);
        runDBOperation(car, err => {
            if (err) {
                console.error(err.stack);
                res.status(500).send('Something broke while creating!');
            }
            // get the last insert id
            res.status(204).send();
            console.log(`A Car has been inserted with rowid ${this.lastID}`);
        });
    } catch (err) {
        console.error(err.stack);
        res.status(400).send(err.message);
    }
}

function runDBOperation(car, cb) {
    db.run(`INSERT INTO car(color) VALUES(?)`, [car.color], cb);
}

module.exports = { CarRESTCreate };

const db = require('../../database').getInstance();

module.exports = {
    insertCar: (car) => {
        const Car = db.getModel('Car');
        return Car.create(car);
    }
};

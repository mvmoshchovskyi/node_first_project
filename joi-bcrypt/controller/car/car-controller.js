const { carService } = require('../../service');

module.exports = {
    createCar: async (req, res) => {
        try {
            await carService.insertCar(req.body);
            res.sendStatus(201).json('car was created');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

};

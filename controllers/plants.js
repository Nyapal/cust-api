const Plant = require('../models/plant');

module.exports = app => {
  // CREATE
  app.post("/plants/new", (req, res) => {
    const plant = new Plant(req.body);

    plant.save((err, plant) => {
      return res.redirect(`/`);
    })
  });
};
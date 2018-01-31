const router = require('express').Router();

const Promise = require("bluebird");
const {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity
} = require('../models');

router.get('/', (req, res, next) => {
  var allAttractions = {};
  Hotel.findAll({
    include: [{model: Place}]
  })
    .then(function(hotels) {
      allAttractions.hotels = hotels;
      return Restaurant.findAll({
    include: [{model: Place}]
  });
    })
    .then(function(restaurants) {
      allAttractions.restaurants = restaurants;
      return Activity.findAll({
    include: [{model: Place}]
  });
    })
    .then(function(activities) {
      allAttractions.activities = activities;
    })
    .then(function() {
      res.json(allAttractions);
    })

    .catch(next);
})



module.exports = router

const express = require("express");
const router = express.Router();
//database
var db = new Sequelize('postgres://localhost:5432/wikistack', { logging: false});

const Place = db.define('place', {
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false

  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY (Sequelize.TEXT),
    allowNull: false
  }
});

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
  },
  age-range {
    type: Sequelize.STRING
  }
});

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
  },
  num_stars: {
    type: Sequelize.FLOAT,
    max: 5,
    min: 1
  }
})

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  price: {
    type: Sequelize.RANGE(Sequelize.INTEGER),
    max: 5,
    min: 1
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

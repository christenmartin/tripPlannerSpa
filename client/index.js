const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1Ijoic253b290ZW4iLCJhIjoiY2pkMXVvY2d6MWhqMjMzbzQwZWNqbWJyNiJ9.kUYt_xOxJSW-n4ZxjFckmA";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);

fetch('/api')
  .then(result => result.json())
  .then(data => {
    //console.log(data.hotels[0].name)
    const hotelNames = document.getElementById('hotels-choices');
    const hotel = data.hotels
    hotel.forEach(elem => {
      const option = document.createElement('option');
      option.append(elem.name);
      document.getElementById('hotels-choices').append(option);
    })
    const restaurantNames = document.getElementById('restaurants-choices');
    const restaurant = data.restaurants
    restaurant.forEach(elem => {
       const option = document.createElement('option');
      option.append(elem.name);
      document.getElementById('restaurants-choices').append(option);
    })
    const activityNames = document.getElementById('activities-choices');
    const activity = data.activities
    activity.forEach(elem => {
       const option = document.createElement('option');
      option.append(elem.name);
      document.getElementById('activities-choices').append(option);
    })

    const hotelButton = document.getElementById('hotels-add');
    const restaurantButton = document.getElementById('restaurants-add');
    const activityButton = document.getElementById('activities-add');

   //  hotelButton.addEventListener('click', (event) => {
   //    const hotelOptions = document.getElementsByTagName('option');
   //    console.log(hotelOptions);
   //  })
   // restaurantButton.addEventListener('click', (event) => {

   //  })
   // activityButton.addEventListener('click', (event) => {

   //  })
    //add an flag / selector to the current hotel selected as the option.
    //the hotel w/ the flag, if the hotelButton us pressed, we
  })



  .catch(console.error)

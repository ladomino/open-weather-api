///////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express");
const weatherKey = process.env.WEATHER_KEY
const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

router.get("/", (req, res) => {
    // res.send("weather page test")
  res.render("search.liquid");
});

////////////////////////////////////////
// Routes
/////////////////////////////////////////
// The Signup Routes (Get => form, post => submit form)
// renders a signup form  
router.get("/weather", (req, res) => {

  // console.log("query zipcode is", req.query.zipcode)
  // setup the searchZipCode coming in from the Form as a query string
  const searchZipCode = req.query.zipcode; 

  // calculate the url based off the zip code 
  //   from the input field
  // Need to build up the Url with zip code and key
  const requestUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${searchZipCode},us&units=imperial&appid=${weatherKey}`

  // Submit the request to retrieve the data
  // Fetch requires node-fetch and special import
  fetch(requestUrl)
    .then((responseData)=>{
        return responseData.json();
    })
    .then((jsonData)=>{
        console.log(jsonData)
        // Will have to pass some input here to be displayed.
        // lets get the json data for city, description, temp and mintemp
        //   and maxtemp
        let city = jsonData.name;
        let cityTemp = jsonData.main.temp;
        let cityDescription = jsonData.weather[0].description
        let minTemp = jsonData.main.temp_min
        let maxTemp = jsonData.main.temp_max
        
        res.render("./weather/show.liquid", { city: city, cityTemp: cityTemp,
            description: cityDescription, minTemp: minTemp, maxTemp: maxTemp});
    })
    .catch((error)=>{
        // If any error is sent bac, you will have access to it here.
        console.log("error!!!:", error);
    });

  
});

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;

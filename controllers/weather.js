///////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express");

const weatherKey = process.env.WEATHER_KEY

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// The Signup Routes (Get => form, post => submit form)
// renders a signup form
router.get("/weather", (req, res) => {
    res.send("weather page")
    // res.render("/weather/show");
  });
  
router.get("/weather", (req, res) => {
  console.log(req.body)
  console.log(req.query)
  // calculate the url based off the zip code 
  //   from the input field
  // Need to build up the Url with zip code and key
  const zipCode = '78750';
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${weatherKey}`

  // Submit the request to retrieve the data

  fetch(requestUrl)
    .then((responseData)=>{
        return responseData.json();
    })
    .then((jsonData)=>{
        // Will have to pass some input here to be displayed.
        res.render("show.liquid");
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
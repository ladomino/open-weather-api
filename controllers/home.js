///////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

router.get("/", (req, res) => {
  res.render("search.liquid");
});

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
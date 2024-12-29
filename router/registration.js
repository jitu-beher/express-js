const express = require("express");

const router = express();

router
  .route("/addUser")
  .get((req, res) => {
    res.render("registrationform");
  })
  .post((req, res) => {
    let firstname = req.body.firstname;
    res.send(firstname);
  });

module.exports = router;

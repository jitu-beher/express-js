const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of users");
});

router.get("/new", (req, res) => {
  res.send("new user");
});

router
  .route("/:id")
  .get((req, res) => {
    let id = req.params.id;
    let user = req.user;

    res.send(
      `Get user with id ${id} <br /> User details id ${user.id} name ${user.name}`
    );
  })
  .put((req, res) => {
    let id = req.params.id;
    res.send(`updated the details for user ${id}`);
  })
  .delete((req, res) => {
    let id = req.params.id;
    res.send(`Deleted the user with id ${id}`);
  });

const users = [
  { id: 1, name: "jitu" },
  { id: 2, name: "krishna" },
];

router.param("id", (req, res, next, id) => {
  console.log(id);

  let user = users.find((user) => user.id == id);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(500).send("Bad requrest for id " + id);
  }
});

module.exports = router;

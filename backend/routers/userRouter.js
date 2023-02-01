const express = require("express");

const router = express.Router();
const Model = require("../models/userModel");

router.get("/", (req, res) => {
  console.log("Request at user index");
  res.status(299).send("UserRouter Working Perfectly!!");
});

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((result) => {
      console.log("User Data Saved");
      res.status(201).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error saving user data", err);
      res.status(500).send("Error saving user data");
    });
});

router.post("/auth", (req, res) => {
  Model.findOne({ email: req.body.email })
    .then((result) => {
      if (result) {
        new Model(result).comparePassword(req.body.password, (err, isMatch) => {
          if (err || !isMatch) {
            console.error("Error authenticating user", err);
            res.status(500).send({status: "failed"});
          } else {
            console.log("User authenticated");
            res.status(201).json({ status: "success", result });
          }
        });
      } else {
        console.error("Error authenticating user");
        res.status(501).json({status: "failed"});
      }
    })
    .catch((err) => {
      console.error("Error authenticating user", err);
      res.status(502).json({status: "failed"});
    });

  // .then((result) => {
  //   console.log("User Data Saved");
  //   res.status(201).json({ status: "success", result });
  // })
  // .catch((err) => {
  //   console.error("Error saving user data", err);
  //   res.status(500).send("Error saving user data");
  // });
});

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      console.log("User Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving user data", err);
      res.status(500).send("Error retrieving user data");
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      console.log("User Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving user data", err);
      res.status(500).send("Error retrieving user data");
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      console.log("User Data Updated");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error updating user data", err);
      res.status(500).send("Error updating user data");
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log("User Data Deleted");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error deleting user data", err);
      res.status(500).send("Error deleting user data");
    });
});

module.exports = router;

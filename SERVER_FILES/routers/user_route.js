const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
// router.use(express.json());

router.use(bodyParser.json({ extended: true }));
router.use(bodyParser.urlencoded({ extended: true }));

const userModel = require("../models/user");
const { user } = require("../utils/DB");

router.get("/", async (req, res) => {
  const getAllUsers = await userModel.findAll();

  res.json({
    data: getAllUsers,
  });
});

router.post("/logIn", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email) {
      console.log(req.body);
      const getUser = await userModel.findOne({
        where: {
          email: email,
          password: password,
        },
      });
      console.log(getUser);

      if (getUser) {
        res.json({
          data: "Log In Successfull...",
        });
      } else {
        res.json({
          error: "Invalid Data",
        });
      }
    }
  } catch (err) {
    res.json({
      error: err,
    });
  }
});

router.post("/signUp", async (req, res) => {
  try {
    console.table(req.body)
    const { name, email, password } = req.body;

    const createUser = await user.create({
      name: name,
      email: email,
      password: password,
    });

    if (createUser) {
      console.log("Sign Up Successfull...");
      res.json({
        data: "Sign Up Successfull...",
      });
    } else {
      console.log("Invalid Data");
      res.json({
        error: "Invalid Data",
      });
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
});

module.exports = router;

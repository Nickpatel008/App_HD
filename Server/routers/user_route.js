const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
// router.use(express.json());

router.use(bodyParser.json({
  extended: true
}));
router.use(bodyParser.urlencoded({
  extended: true
}));

const userModel = require("../models/user");
const {
  user
} = require("../utils/DB");

router.get("/", async (req, res) => {
  const getAllUsers = await userModel.findAll();

  res.json({
    data: getAllUsers,
  });
});

router.post("/signIn", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    if (email) {
      console.log(req.body);
      const getUser = await user.findOne({
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
    const {
      fname,
      lname,
      email,
      password
    } = req.body;


    if (email !== null) {

      const createUser = await user.create({
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
      });

      if (createUser) {
        console.log("Sign Up Successfull...");
        res.json({
          data: "Sign Up Successfull...",
        });
      } else {
        throw new Error('Whoops :)')
      }

    } else {
      throw new Error('Whoops :)')
    }

  } catch (error) {
    res.status(401).send({
      errorCode : 401,
      msg : "Something Went Wrong..."
    })
  }
});

module.exports = router;
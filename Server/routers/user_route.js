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

const { user } = require("../utils/DB");

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

      if (getUser) {
        res.json({
          data: "Log In Successfull...",
        });
      } else {
        res.status(401).send({
          errorCode : 401,
          msg : "Something Went Wrong..."
        })
      }
    }
  } catch (err) {
    res.status(401).send({
      errorCode : 401,
      msg : "Something Went Wrong..."
    })
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
    console.log("Something Went Wrong...");
    res.status(401).send({
      errorCode : 401,
      msg : "Something Went Wrong..."
    })
  }
});

router.get('/getUserDetails/:email' , async (req , res) => {

  try {

    const email = req.params.email;

    const UserData = await user.findOne({
     where : {
      email : email
     } 
    }) 

    if(UserData){
      res.json({
        msg: "User Data Fetched Successfully...",
        data : UserData
      });
    }
    else{
      res.status(401).send({
        errorCode : 401,
        msg : "Something Went Wrong..."
      })
    }
    
  } catch (error) {
    res.status(401).send({
      errorCode : 401,
      msg : "Something Went Wrong..."
    })
  }

})

module.exports = router;
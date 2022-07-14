const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
// router.use(express.json());

router.use(bodyParser.json({ extended: true }));
router.use(bodyParser.urlencoded({ extended: true }));

const userModel = require("../models/subscription");
const db = 

router.post("/getSubscription", async (req, res) => {
  try {
    const { subscription_name } = req.body;

    if (true) {
      const createUserSubscription = await userModel.create({
        subscription_name,
      });

      if (createUserSubscription) {
        res.json({
          data: "Subscription purchase Successfull...",
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

module.exports = router;

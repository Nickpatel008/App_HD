const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

require("./utils/DB");

const userRoute = require("./routers/user_route");
const subscriptionRoute = require("./routers/subscription_route");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.use("/user", userRoute);
app.use("/buySubscription", subscriptionRoute);

app.listen(port, () => {
  console.log("Server Running At :- ", port);
});

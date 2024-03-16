// Importing the express module
const express = require("express");
// Creating a router instance using express.Router()
const router = express.Router();
// Importing the ExampleRoutes module from './example.route'
const EssaiRoutes = require("./essai.route"); // Change variable name to EssaiRoutes
// Importing the MODELS enum from the '../utils/enum/routes.enum' file
const { MODELS } = require("../utils/enum/routes.enum");
const BaseRoute = require("./Base.route");
// Creating an instance of ExampleRoutes
const essaiRoutes = new EssaiRoutes(); // Change variable name to EssaiRoutes

const BaseRoutes = new EssaiRoutes();
// Mounting the exampleRoutes router under the path specified by MODELS.EXAMPLE
router.use(MODELS.essai, essaiRoutes.getRouter());

router.use(MODELS.BASE, BaseRoutes.getRouter());
router.use("*", (req, res) => {
  return res
    .status(404)
    .json({ messgae: "page not found, bad url", status: "fail" });
});
// Exporting the router to be used in other modules
module.exports = router;

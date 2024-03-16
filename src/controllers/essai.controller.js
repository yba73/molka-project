// Importing the essaiService module from the '../services/essai.service' file
const essaiService = require("../services/essai.service");
// Importing the essai model from the "../models/essai.model" file
const essai = require("../models/essai.model");
// Importing the IBaseController module from the "./IBase.controller" file
const IBaseController = require("./IBase.controller");

const MulterMiddleware = require("../middlewares/multer.middleware");
const { log } = require("handlebars");
this.multerMiddleware = new MulterMiddleware();
// Defining a new class essaiController which extends IBaseController
class essaiController extends IBaseController {
  constructor() {
    // Calling the constructor of the parent class (IBaseController) and passing an instance of essaiService initialized with essai model
    super(new essaiService(essai));
    // Initializing an instance of essaiService with essai model and assigning it to the property essaiService of the essaiController class
    this.essaiService = new essaiService(essai);
  }
  CreateEssai = async (req, res) => {
    const { name } = req.body;
    const testDate = new Date();
    const data = { name, testDate };
    const messages = {
      message: "essay has been created successfully",
      status: "success",
    };
    // Await and handle the promise returned by the service's custom method, passing the request body as a parameter.
    await this.handleRequest(
      this.essaiService.createEssaiServices(data),
      messages,
      res
    );
  };
  // Defining a custom method called Custom that takes in request (req) and response (res) objects
  Custom = async (req, res) => {
    // Await and handle the promise returned by the service's custom method, passing the request body as a parameter.
    await this.handleRequest(this.essaiService.custom(req.body), res);
  };
  CustomPhoto = async (req, res) => {
    const _id = req.params.id;
    //image
    let photo = [];
    let image = {};
    // for loop of all images
    req.files.forEach((oneImage) => {
      image.path = `http://localhost:3000/uploads/${oneImage.filename}`;
      image.données = "données";
      image.taille = oneImage.size;
      photo.push(image);
    });

    const data = { _id, photo };
    const messages = {
      message: "images has been add success",
      status: "success",
    };
    // Await and handle the promise returned by the service's customPhoto method, passing the data object as a parameter.
    await this.handleRequest(
      this.essaiService.customPhoto(data),
      res,
      messages
    );
  };

  CustomText = async (req, res) => {
    // Await and handle the promise returned by the service's CustomText method, passing the request body as a parameter.
    await this.handleRequest(this.essaiService.CustomText(req.body), res);
  };

  // getEssais = async (req, res) => {
  //   // Await and handle the promise returned by the service's CustomText method, passing the request body as a parameter.
  //   await this.handleRequest(this.essaiService.getAll(), res);
  // };
}

// Exporting the essaiController class to be used in other modules
module.exports = essaiController;

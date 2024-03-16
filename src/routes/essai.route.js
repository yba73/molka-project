// Importing the essaiController module from the '../controllers/essai.controller' file
const essaiController = require("../controllers/essai.controller");

// Importing the BaseRoute module from the './Base.route' file
const BaseRoute = require("./Base.route");
const MulterMiddleware = require("../middlewares/multer.middleware");

// Importing the routes enum from the '../utils/enum/routes.enum' file
const routes = require("../utils/enum/routes.enum");

// Defining a new class essaiRoutes which extends BaseRoute
class essaiRoutes extends BaseRoute {
  constructor() {
    // Calling the constructor of the parent class (BaseRoute) and passing an instance of essaiController
    super(new essaiController());

    // Initializing an instance of essaiController and assigning it to the property essaiController of the essaiRoutes class
    this.essaiController = new essaiController();
    this.multerMiddleware = new MulterMiddleware();
    // Calling the setupRoutes method and catching any errors that occur
    this.setupRoutes().catch((error) => {
      console.error("Error setting up routes:", error);
    });
  }

  // Asynchronously setting up routes
  async setupRoutes() {
    // Calling the setupRoutes method of the parent class (BaseRoute)
    await super.setupRoutes();
    // Binding the Custom method of the essaiController instance to the essaiController object
    const CreateEssaiHabdle = this.essaiController.CreateEssai.bind(
      this.essaiController
    );
    // Binding the Custom method of the essaiController instance to the essaiController object
    const UpdateScoreHandle = this.essaiController.Custom.bind(
      this.essaiController
    );

    // Binding the Custom method of the essaiController instance to the essaiController object
    const UpdatePhotoHandle = this.essaiController.CustomPhoto.bind(
      this.essaiController
    );
    // Binding the Custom method of the essaiController instance to the essaiController object
    const UpdateTextHandle = this.essaiController.CustomPhoto.bind(
      this.essaiController
    );
    // Binding the Custom method of the essaiController instance to the essaiController object
    const GetAllEassais = this.essaiController.GetAll.bind(
      this.essaiController
    );

    // Adding a GET route with the path specified in the routes enum, using the getByPriceHandler as the route handler
    this.router.patch(routes.PATCH_SCORE, UpdateScoreHandle);
    this.router.patch(
      routes.PATCH_PHOTO,
      this.multerMiddleware.upload,
      UpdatePhotoHandle
    );
    this.router.patch(routes.PATCH_Text, UpdateTextHandle);
    this.router.post(routes.ADD, CreateEssaiHabdle);
    this.router.get(routes.GET_ALL, GetAllEassais);
  }
}

// Exporting the essaiRoutes class to be used in other modules
module.exports = essaiRoutes;

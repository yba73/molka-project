// Load environment variables from the .env file into process.env
// process.env.NODE_ENV = "development";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

// Load environment variables for production
if (process.env.NODE_ENV === "production") {
  require("dotenv").config({ path: ".env.production" });
}
console.log("dotenv", process.env.PORT);
// Export an object containing configuration parameters
module.exports = {
  // Define configuration parameters for the server
  SERVER: {
    // Specify the port number for the server
    PORT: process.env.PORT || 5000, // Use the PORT environment variable if defined, otherwise default to 3000
  },
  // Define configuration parameters for the database
  DATABASE: {
    // Specify the URL for connecting to the database
    URL: process.env.DATABASE_URL, // Obtain the database URL from the DATABASE_URL environment variable
    // Options to be passed to the MongoDB client when connecting to the database
    OPTIONS: {
      useNewUrlParser: true, // Enable the new URL parser
      useUnifiedTopology: true, // Enable the new server discovery and monitoring engine
    },
  },
  // Define configuration parameters for the email sender
  SENDER: {
    // Specify the email service provider
    service: process.env.MAIL_SERVICE,
    // Authentication credentials for the email service
    auth: {
      user: process.env.MAIL_USER, // Email service username obtained from environment variables
      pass: process.env.MAIL_PASSWORD, // Email service password obtained from environment variables
    },
  },
};

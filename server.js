const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public")); // Add this line to serve static files

// Import routes
const homeRoutes = require("./controllers/home-routes.js");

// Set up routes
app.use("/", homeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
// const mysql = require("mysql");
const router = require("./routes/routes.js").router
// dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json()); 

app.use('/', router)

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

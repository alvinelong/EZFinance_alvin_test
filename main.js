// import the express library
const express = require("express");

// import cors to allow running backend on same machine as frontend.
const cors = require("cors");

// import router from routers.js
const { router } = require("./routers");

// define server instance
let app = express();
app.use(cors());
app.use(express.json());

// tell the app to use router for API mappings
app.use(router);

// start the server at port 3000
app.listen(process.env.PORT || 3000, (errors) => {
  if (errors) {
    console.log(errors);
  } else {
    console.log("Server started on port 3000");
  }
});

const express = require('express')
const app = express();
const route = require("./Routes/index.js");

const PORT = process.env.PORT || 5000;


app.use("/", route);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});  
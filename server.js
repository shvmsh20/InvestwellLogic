const express = require('express')
const app = express()
const route = require("./Routes/index.js")

const PORT = process.env.PORT || 5000

//using routes
app.use("/", route)

//listening on PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});  
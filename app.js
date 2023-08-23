const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=> res.send("Practicando Node.js"));
app.listen(port,()=> console.log("Estoy corriendo en el puerto ${port}!"));



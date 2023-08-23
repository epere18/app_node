const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res)=>res.send("Practicando Node.js"));

app.get("/productos", (req, res)=> {
    const products = [
        {
            id: 1,
            name: "Oscar",
        },
        {
            id: 2,
            name: "Andres",
        },
        {
            id: 3,
            name: "Ingrid",
        },
        {
            id: 4,
            name: "Arianna",
        },
        {
            id: 5,
            name: "Adriano",
        },
    ];
    res.json(products);
});

app.listen(port,()=> console.log("Estoy corriendo en el puerto ${port}!"));



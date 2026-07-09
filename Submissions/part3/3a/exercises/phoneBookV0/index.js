const express = require('express');
const data = require("./db.json");
const app = express();
const PORT = 3001;

app.get("/api/persons", (req, res) => {
    if (data && data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(404).send("Data was not found!");
    }
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
const express = require('express');
const data = require("./db.json");
const app = express();
const PORT = 3001;


// API endpoints

app.get("/", (req, res) => {
    res.send("PhoneBook");
});

// app.get("/api/persons", (req, res) => {
//     if (data && data.length > 0) {
//         res.status(200).json(data);
//     } else {
//         res.status(404).send("Data was not found!");
//     }
// });


// Page endpoints

app.get("/api/persons", (req, res) => {
    let html = "<h1>Persons</h1>";

    if (data && data.length > 1) {
        for (let i = 0; i < data.length; i++) {
            html += `
                <p>${data[i].name} - ${data[i].number}</p>
                <a href=/api/persons/${data[i].id}>View contact</a>
            `;
        }
    }

    if (data && data.length) {
        res.send(html);
    } else {
        res.send("No persons found!");
    }
});

app.get("/api/persons/:id", (req, res) => {
    const person = data.filter(person => {
        return person.id === req.params.id;
    });
    console.log(person);
    if (person) {
        res.send(`Name: ${person[0].name}<br>Number: ${person[0].number}`);
    } else {
        res.send("Person not found!");
    }
});

app.get("/info", (req, res) => {
    if (data && data.length > 0) {
        const now = new Date();
        res.send(`Phonebook has info for ${data.length} people.<br><br>
            Date: ${now.toLocaleDateString()}<br>
            Day: ${now.toLocaleDateString(undefined, { weekday: "long" })}<br>
            Time: ${now.toLocaleTimeString()}<br>
            Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}<br>
        `);
    } else {
        res.send("No information found!");
    }
});


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
const express = require("express");
let data = require("./db.json");
const morgan = require("morgan");
const app = express();
const PORT = 3001;

// Enable express to read form data in request.body
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());


// Request logger middleware

// const requestLogger = (req, res, next) => {
//     console.log('Method: ', req.method);
//     console.log('Path: ', req.path);
//     console.log('Body: ', req.body);
//     console.log('---');
//     next();
// };

// Request logger call
// app.use(requestLogger);


// Morgan middleware configuration
const logger = morgan('tiny');


// API endpoints

app.get("/", (req, res) => {
    res.send("PhoneBook");
});

app.get("/api/persons", (req, res) => {
    if (data && data.length > 0) {
        res.status(200).send(data);
    } else {
        res.status(404).send("Data not found!");
    }
});

app.get("/api/persons/:id", (req, res) => {
    const id = req.params.id;
    const contact = data.find(contact => contact.id === id);
    if (contact) {
        res.status(200).send(contact);
    } else {
        res.status(404).send("Contact not found!");
    }
});

app.delete("/api/persons/:id", (req, res) => {
    const id = req.params.id;
    const contact = data.find(contact => contact.id === id);

    if (contact) {
        data = data.filter(contact => contact.id !== id);
        res.status(204).send(data);
    } else {
        res.status(404).send("Contact to delete not found!");
    }
});

app.post("/api/persons", (req, res) => {
    console.log("req body object: ", req.body);
    const id = Math.floor(Math.random() * 190000).toString();
    if (req.body.name && req.body.number) {
        const duplicateName = data.find(contact => contact.name === req.body.name);
        const duplicateNumber = data.find(contact => contact.number === req.body.number);
        if (duplicateName || duplicateNumber) {
            res.status(400).send("Name or number already exists.");
        } else {
            const newContact = {
                id: id,
                name: req.body.name,
                number: req.body.number
            };
            data.push(newContact);
            res.status(200).send(data);
        }
    } else {
        console.log("No req body object found");
        res.status(400).send("Incorrect data received!");
    }
});




// Page endpoints

app.get("/persons", (req, res) => {
    let html = "<h1>Persons</h1>";

    if (data && data.length > 1) {
        for (let i = 0; i < data.length; i++) {
            html += `
                <p>${data[i].name} - ${data[i].number}</p>
                <a href="/api/persons/${data[i].id}">View contact</a>
                <button data-delete-id="${data[i].id}" class="deleteContact">
                    Delete contact
                </button>
            `;
        }
    }

    html += `
        <script>
            const deleteBtns = document.querySelectorAll(".deleteContact");

            for (let i = 0; i < deleteBtns.length; i++) {
                deleteBtns[i].addEventListener("click", deleteContact);
            }

            function deleteContact(e) {
                const deleteId = e.target.dataset.deleteId;

                fetch(\`http://localhost:3001/api/persons/\${deleteId}\`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(err => {
                    console.error("Delete contact failed. Error:", err);
                });
            }
        </script>
    `;

    if (data && data.length) {
        res.send(html);
    } else {
        res.send("No persons found!");
    }
});

app.delete("/persons/:id", (req, res) => {
    const id = req.params.id;
    data = data.filter(contact => contact.id !== id);
    res.status(204).send(data);
});


app.get("/persons/:id", (req, res) => {
    const person = data.find(person => {
        return person.id === req.params.id;
    });

    console.log(person);

    if (person) {
        res.send(`Name: ${person.name}<br>Number: ${person.number}`);
    } else {
        res.send("Person not found!");
    }
});


app.get("/info", (req, res) => {
    if (data && data.length > 0) {
        const now = new Date();

        res.send(`
            Phonebook has info for ${data.length} people.<br><br>
            Date: ${now.toLocaleDateString()}<br>
            Day: ${now.toLocaleDateString(undefined, { weekday: "long" })}<br>
            Time: ${now.toLocaleTimeString()}<br>
            Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
        `);
    } else {
        res.send("No information found!");
    }
});


// Unknown endpoint middleware

const unknownEndPoint = (req, res, next) => {
    res.status(404).send("This endpoint was not found!");
}

app.use(unknownEndPoint);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
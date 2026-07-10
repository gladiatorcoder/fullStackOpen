const express = require("express");
let data = require("./db.json");
const app = express();
const PORT = 3001;


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
    const id = Math.floor(Math.random() * 190000).toString();
    console.log(req.body);
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
    res.send(data);
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


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
const express = require("express");
const app = express();
app.use(express.json());


let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
    },
    {
        id: "2",
        content: "Browser can execute only Javascript",
        important: false
    },
    {
        id: "3",
        content: "GET and POST are the most immportant methods of the HTTP protocol",
        imnportant: true
    }
];

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => Number(n.id)))
        : 0;

    return String(maxId + 1);
}

app.get("/", (req, res) => {
    res.send("<h1>Hi world</h1>");
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const note = notes.find(note => note.id === id);
    if (note) {
        res.json(note)
    } else {
        res.status(404).send("Note not found!");
    }
});

app.post("/api/notes", (req, res) => {
    const body = req.body;

    if (!body.content) {
        return res.status(400).json({
            error: "Content missing!"
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        id: generateId()
    };

    notes = notes.concat(note);
    res.json(note);
});

app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    notes = notes.filter(note => id !== note.id);
    res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

import axios from "axios";

const serverUrl = "http://localhost:3001/notes";

const getAll = () => {
    const request = axios.get(serverUrl);
    const nonExisting = {
        id: 10000,
        content: "Virus note",
        important: true
    };
    return request.then(res => res.data.concat(nonExisting))
    .catch(err => {
        console.error("Error fetching notes: ", err);
    });
}

const createNote = (newObject) => {
    const request = axios.post(serverUrl, newObject);
    return request.then(res => res.data)
    .catch(err => console.error("Error posting note: ", err));
}

const updateNote = (newObject, id) => {
    const request = axios.put(`${serverUrl}/${id}`, newObject);
    return request.then(res => res.data);
}

export default {
    getAll,
    createNote,
    updateNote
}
import axios from "axios";

const serverUrl = "http://localhost:3001/contacts";

const getAllContacts = () => {
    return axios.get(serverUrl)
    .then(res => {
        if(res.data && res.data.length > 0){
            return res.data;
        }
    })
    .catch(err => {
        console.error("Error fetching contacts", err);
    })
}

const addContact = (newContact) => {
    const request = axios.post(serverUrl, newContact);
    return request;
}

const deleteContact = (id) => {
    const request = axios.delete(`${serverUrl}/${id}`);
    return request;
}

const updateContact = (id, newPerson) => {
    const request = axios.put(`${serverUrl}/${id}`, {
        name: newPerson.name,
        number: newPerson.number,
        edited: true
    });
    return request;
}

export default {
    getAllContacts,
    addContact,
    deleteContact,
    updateContact
};
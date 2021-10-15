const BASE_URL = 'https://connections-api.herokuapp.com/'


async function fetchContacts() {
    return await fetch(BASE_URL).then(res => res.json())
};

async function postContact(contactData) {
    return await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: { 'Content-Type': 'application/json' }
    })
};

async function deleteContact(id) {
    return await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    })
};

async function registerUser(name, email, password) {
    return await fetch(`${BASE_URL}/users/signup`, {
        method: 'POST',
        body: {
            name,
            email,
            password
        }
    })
}

export {
    fetchContacts,
    postContact,
    deleteContact,
    registerUser
}
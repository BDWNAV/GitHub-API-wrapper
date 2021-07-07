const fetch = require("node-fetch");

async function getUser(username) {
    const res = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        } 
    });
    return res.json();
}

module.exports = getUser;
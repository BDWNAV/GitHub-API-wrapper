const fetch = require("node-fetch");

async function getUser(username) {
  if (username) {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  } else {
    throw new TypeError("There was no username provided");
  }
}

module.exports = getUser;
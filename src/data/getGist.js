const fetch = require("node-fetch");

async function getGist(gistID) {
  if(gistID) {
    const res = await fetch(`https://api.github.com/gists/${gistID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return res.json();
  } else {
    throw new TypeError("There was no gistID provided.");
  } 
}

module.exports = getGist;
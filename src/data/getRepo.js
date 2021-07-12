const fetch = require("node-fetch");

async function getRepo(repoAuthor, repoName) {
  if(repoAuthor || repoName) {
    const res = await fetch(`https://api.github.com/repos/${repoAuthor}/${repoName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    return res.json();
  } else {
    throw new TypeError("There was no author, or name provided to get for the repo.");
  }
}

module.exports = getRepo;
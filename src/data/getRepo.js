const fetch = require("node-fetch");

async function getRepo(repoAuthor, repoName) {
  const res = await fetch(`https://api.github.com/repos/${repoAuthor}/${repoName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return res.json();
}

module.exports = getRepo;
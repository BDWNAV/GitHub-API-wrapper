const github = require("@bdwnav/github-api-wrapper");

//Get a user.
//For the paramaters you need the username of the user that you want to get the data for.
github.getUser('BDWNAV').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

//Get a repo.
//For the paramaters you need the repo owners name, and you also need the repository that you are looking for.
github.getRepo('BDWNAV', 'GitHub-API-wrapper').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
const github = require("@bdwnav/github-api-wrapper");

github.getUser('BDWNAV').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
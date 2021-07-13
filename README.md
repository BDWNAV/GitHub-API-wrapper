# github-api-wrapper

Github api wrapper is a simple package to get public data for the user and repos. It is also very simple to use.

# get a user
 
```js
const github = require("@bdwnav/github-api-wrapper");

//Get a user function.
function getAUser() {
  github.getUser("BDWNAV").then((data) => console.log(data)).catch((err) => console.log(err));
}
```

# get a repo
```js
//Get a repo function.
function getARepo() {
  //Paramaters required are the repo owners name, and the repos name.
  github.getRepo("BDWNAV", "GitHub-API-wrapper").then((data) => console.log(data)).catch((err) => console.log(err));
}
```
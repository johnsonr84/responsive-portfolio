// const github_data = {
//     "token": "03df8b51cd2c0409bd43f17642575b88b61a8d22",
//     "username": "johnsonr84",
// };

// const fetch = require("node-fetch");

// const body = {
//     "query": `
//     {
//         query {
//             user(login: "johnsonr84") {
//               contributionsCollection {
//                   totalCommitContributions
//                 }
//               }
//           }
//     `
// };

// const baseURL = "https://api.github.com/graphql";

// const headers = {
//     "Content-Type": "application/json",
//     Authentication: "bearer " + github_data["token"]
// }

// fetch(baseURL, {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(body)
// }).
//     then(response => { console.log(JSON.stringify(response)) })
//     .catch(err => console.log(JSON.stringify(err)));
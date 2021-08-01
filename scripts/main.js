const repoCount = document.getElementById('repo-count')
const commitCount = document.getElementById('commit-count')
// alert("hi")
// const queryFetch = require("node-fetch");

function queryFetch(query) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query
    })
  })
    .then(res => res.json())
}
queryFetch(`
    query { 
            user(login: "johnsonr84") {
              repositories {
                totalCount
              }
              name
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
     `)

  .then(data => {
    // data.data.user('login: "johnsonr84"').foreach(repository => {
    //   const totalRepo = document.createElement('totalRepo')
    //   totalRepo.value = repository.repositories
    //   totalRepo.innerText = respository.totalCount
    //   repoCount.append(totalRepo)
    //   console.log(totalCount)
    console.log(data)
    
  }).then(data => {
    data.data.name.foreach(contribution => {
      const totalCommit = document.createElement('totalCommit')
      totalCommit.value = contribution.contributionsCollection
      totalCommit.innerText = contribution.totalCommitContributions
      commitCount.append(totalCommit)
      console.log(totalCommit)
    })

  })

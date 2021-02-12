const repoCount = document.getElementById('repo-count')
const commitCount = document.getElementsByID('commit-count')

queryFetch(`
    query { 
        {
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
    data.data.user('login: "johnsonr84"').foreach(repository => {
        const totalRepo = document.createElement('totalRepo')
        totalRepo.value = repository.repositories 
        totalRepo.innerText = respository.totalCount
        repoCount.append(totalRepo)
        console.log(totalRepo)
    })
}) .then(data => {
    data.data.name.foreach(contribution => {
        const totalCommit = document.createElement('totalCommit')
        totalCommit.value = contribution.contributionsCollection
        totalCommit.innerText = contribution.totalCommitContributions
        commitCount.append(totalCommit)
        console.log(totalCommit)
    })

function queryFetch(query) {
    return fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: query
        })
    })
        .then(res => res.json())

        // Response from GitHub GraphQL API 
// {
//     "data": {
//       "user": {
//         "repositories": {
//           "totalCount": 26
//         },
//         "name": "Codedork1",
//         "contributionsCollection": {
//           "contributionCalendar": {
//             "totalContributions": 277
//           }
//         }
//       }
//     }

export default {
  queryArchivesCount: ({ username, repository }:any) => `
    query { 
      repository(owner:"${username}", name: "${repository}") {
        issues(states:OPEN) {
          totalCount
        }
      }
    }
  `,
  queryInspirationCount: ({ username, repository }:any) => `
    query { 
      repository(owner:"${username}", name: "${repository}") {
        issues(states:CLOSED, labels: ["Inspiration"]) {
          totalCount
        }
      }
    }
  `,
  queryFilterArchivesCount: ({ username, repository, label, milestone }:any) => `
    {
      search(type: ISSUE, query: "
        user:${username} 
        repo:${repository} 
        state:open
        ${milestone ? 'milestone:' + milestone : ''}  
        ${label ? 'label:' + label : ''} 
      ") {
        issueCount
      }
    }
  `
}

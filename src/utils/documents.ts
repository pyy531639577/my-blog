export default {
  // 获取博客总数
  queryArchivesCount: ({ username, repository }:any) => `
    query { 
      repository(owner:"${username}", name: "${repository}") {
        issues(states:OPEN) {
          totalCount
        }
      }
    }
  `,
  // 获取心情总数
  queryInspirationCount: ({ username, repository }:any) => `
    query { 
      repository(owner:"${username}", name: "${repository}") {
        issues(states:CLOSED, labels: ["Inspiration"]) {
          totalCount
        }
      }
    }
  `,
  // 获取筛选条件博客的数量
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

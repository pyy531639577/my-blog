import AV from './leancloud'
import config from '@/config/index'
import documents from './documents'

const GRAPHQL_URL = 'https://api.github.com/graphql'
const GITHUB_API = 'https://api.github.com/repos'

const { username, repository, token } = config
const blog = `${GITHUB_API}/${username}/${repository}`
const accessToken = token.join('')
const open = `state=open&access_token=${accessToken}`
const closed = `state=closed&access_token=${accessToken}`
const isDev = /^(192\.168|localhost)/.test(window.location.host)

// 状态检测
const checkStatus:any = (response:any) => {
  console.log('响应信息:' + response)
  if (response.status >= 200 && response.status < 300) return response
  const error:any = new Error(response.statusText)
  error.response = response
  throw error
}

// 构建 GraphQL
const createCall:any = async (document:any) => {
  try {
    const payload:string = JSON.stringify({ query: document })
    const response:any = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        Authorization: `token ${accessToken}`
      },
      body: payload
    })
    // checkStatus(response)
    const body = await response.json()
    return body.data
  } catch (err) {
    console.log(err)
  }
}

// 获取文章数量
export const queryArchivesCount = () => createCall(documents.queryArchivesCount({ username, repository }))

// 获取灵感数量
export const queryInspirationCount = () =>
  createCall(documents.queryInspirationCount({ username, repository }))

// 按分类 & 标签筛选文章
export const queryFilterArchivesCount = ({ label, milestone }:any) =>
  createCall(documents.queryFilterArchivesCount({ username, repository, label, milestone }))

// 获取文章列表
export const queryPosts = async ({ page = 1, pageSize = 10, filter = '' }:any) => {
  try {
    const url:string = `${blog}/issues?${open}&page=${page}&per_page=${pageSize}${filter}`
    const response:any = await fetch(url)
    checkStatus(response)
    const data:any = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

// 获取单篇文章
export const queryPost = async (number:number) => {
  try {
    const url = `${blog}/issues/${number}?${open}`
    const response = await fetch(url)
    checkStatus(response)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

// 获取所有分类
export const queryCategory = async () => {
  try {
    const url = `${blog}/milestones?access_token=${accessToken}`
    const response = await fetch(url)
    checkStatus(response)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

// 获取标签
export const queryTag = async () => {
  try {
    const url = `${blog}/labels?access_token=${accessToken}&page=1&per_page=100`
    const response = await fetch(url)
    checkStatus(response)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

// 获取灵感
export const queryInspiration = async ({ page = 1, pageSize = 10 }) => {
  try {
    const url = `${blog}/issues?${closed}&labels=inspiration&page=${page}&per_page=${pageSize}`
    const response = await fetch(url)
    checkStatus(response)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

// 文章热度
export const queryHot = async (ids: any) => {
  return new Promise(resolve => {
    if (isDev) return resolve([])
    const query = new AV.Query('Counter')
    query.containedIn('id', ids)
    query.find().then((res: any) => {
      const hot: any = {}
      res.forEach((o: any) => (hot[o.attributes.id] = o.attributes.time))
      resolve(hot)
    })
  })
}

// 增加热度
export const increaseHot = (post: any) => {
  return new Promise(resolve => {
    if (isDev) return resolve(1)
    const query: any = new AV.Query('Counter')
    const Counter: any = AV.Object.extend('Counter')
    const { title, id } = post
    query.equalTo('id', id)
    query.find().then((res: XMLHttpRequestResponseType) => {
      if (res.length > 0) {
        // 已存在则返回热度
        const counter: any = res[0]
        counter
          .increment('time', 1)
          .save(null, { fetchWhenSave: true })
          .then((counter: any) => {
            const time = counter.get('time')
            resolve(time)
          })
      } else {
        // 不存在则新建
        const newcounter = new Counter()
        newcounter.set('title', title)
        newcounter.set('id', id)
        newcounter.set('time', 1)
        newcounter.set('site', location.href)
        newcounter.save().then(() => resolve(1))
      }
    })
  })
}

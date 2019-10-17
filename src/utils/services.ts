import AV from 'leancloud-storage'
// @ts-ignore
import config from '../config'
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

// 获取分类
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

// 获取书单 & 友链 & 关于
export const queryPage = async (type:string) => {
  try {
    const upperType = type.replace(/^\S/, s => s.toUpperCase())
    const url = `${blog}/issues?${closed}&labels=${upperType}`
    const response = await fetch(url)
    checkStatus(response)
    const data = await response.json()
    return data[0]
  } catch (err) {
    console.log(err)
  }
}

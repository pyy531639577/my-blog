import config from '../config/index'
// @ts-ignore
import { parseTime } from 'timeago.js'
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
/**
 * 格式化文章
 */
// const regex = /^(.+)?\r\n\s*(.+)?\r\n/
// const coverRegex = /^\[(.+)\].*(http.*(?:jpg|jpeg|png|gif))/
// export const formatPost = (post:any) => {
//   // eslint-disable-next-line camelcase
//   const { body, created_at }:any = post
//   const result:any = regex.exec(body)
//   // const cover = coverRegex.exec(result[1])
//   post.cover = {
//     // title: cover[1] || 'defaultCover',
//     title: 'defaultCover',
//     // src: cover[2] || config.defaultCover
//     src: config.defaultCover
//   }
//   post.description = result[2]
//   post.created_at = format(created_at, 'zh_CN')
//   return post
// }

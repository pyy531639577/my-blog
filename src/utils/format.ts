import config from '../config/index'
// @ts-ignore
import { parseTime } from 'timeago.js'
/**
 * 格式化文章
 * 筛选 desc里面包含的内容
 */
const blogFormat = /^desc(.+)?\r\n\s*(.+)?\r\ndesc/
export const formatPost = (posts:any) => {
  posts.forEach((post:any) => {
    // @ts-ignore
    let res:any[] = blogFormat.exec(post.body)
    post.desc = res[2]
    // post.create_at = post.create_at.split('T')[0]
    console.log(res)
  })
  return posts
}

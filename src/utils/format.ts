import config from '../config/index'
// @ts-ignore
import { parseTime } from 'timeago.js'
import moment from 'moment'
/**
 * 格式化文章
 * 筛选 desc里面包含的内容
 */
const blogRegx = /^(.+)?\r\n\s*(.+)?\r\n/
// eslint-disable-next-line no-useless-escape
const pngRegx = /\[cover\]\((.+)\)/
export const formatPost = (posts:any) => {
  posts.forEach((post:any) => {
    let res = blogRegx.exec(post.body)
    // @ts-ignore
    post.desc = res[1]
    post.createTime = moment(post.created_at).format('YYYY-MM-DD hh:mm:ss')
    // @ts-ignore
    let cover = pngRegx.exec(post.body)
    // @ts-ignore
    if (cover != null) {
      post.cover = cover[1]
    } else {
      post.cover = config.defaultCover
    }
  })
  return posts
}

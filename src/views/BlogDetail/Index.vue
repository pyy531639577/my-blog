<template>
  <div class="blog-info">
    <Banner :imgBackgroud="bannerImg" />
    <div class="content-wrapper mt-8">
      <h1>[HTTP 系列] 第 2 篇 —— HTTP 协议那些事</h1>
      <div class="content-tool">
        <span class="mr-4">发布时间:2019-5-6 5:00:5</span>
        <span class="mr-4">归档于 后端</span>
        <ul>
          <li>
            <a>JAVA</a>
          </li>
          <li>
            <a>JAVA</a>
          </li>
          <li>
            <a>JAVA</a>
          </li>
        </ul>
      </div>
      <blockquote class="summary">
        这里是《写给前端工程师的 HTTP 系列》，记得有位大佬曾经说过：“大厂前端面试对 HTTP 的
        要求比 CSS 还要高”，由此可见 HTTP 的重要程度不可小视。文章写作计划如下，视情况可能有一定的删减
        ，本篇是该系列的第 2 篇 —— 《HTTP 协议那些事》。这篇文章会涉及到 HTTP 协议，cookie 和 session，HTTP 首部/方法/状态码等。
      </blockquote>
      <section class="blog-content">
        <MarkDown :content="post.body" target="#post" />
      </section>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import Banner from '@/components/Banner/Index.vue'
import { queryPost } from '@/utils/services'
import Loading from '@/components/Loading/index.vue'
import MarkDown from '@/components/MarkDown/Index.vue'
@Component({
  components: {
    Loading,
    Banner,
    MarkDown
  }
})
export default class Index extends Vue {
  blogId:any;
  bannerImg:string = 'https://picsum.photos/id/2/5616/3744'
  post:any

  created () {
    this.blogId = this.$route.params.id
    console.log(this.blogId)
  }
  mounted () {
    this.getBlogDetail(this.blogId)
  }

  getBlogDetail (id:number) {
    this.post = queryPost(id)
  }
}
</script>

<style scoped lang="less">
  .blog-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    .content-wrapper{
      width: 50%;
      text-align: justify;
      .content-tool{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2rem 0;
        ul{
          list-style: none;
          li{
            display: inline-block;
            background: #666666;
            margin-left: 5px;
            padding: 2px 15px;
            a{
              color: white;
              text-decoration: none;
              outline: none;
              border: none;
            }
          }
        }
      }
      .summary{
        color: #666;
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        border-left: 4px solid #cbcbcb;
        background-color: #f8f8f8;
        font-size: 0.8rem;
        line-height: 1.8;
      }
      .blog-content{
        display: block;
      }
    }
  }
</style>

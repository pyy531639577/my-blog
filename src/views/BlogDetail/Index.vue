<template>
  <div class="blog-info">
    <Banner :imgBackgroud="bannerImg" />
    <div class="content-wrapper mt-8">
      <article v-if="post">
        <div class="post-header">
          <div class="head">
            <div class="title">
              <h1>{{ post.title }}</h1>
<!--              <span>{{ post.cover.title }}</span>-->
            </div>
            <div class="meta">
              <span> <i class="icon icon-calendar"></i> {{ post.created_at }} </span>
              <span>
                <i class="icon icon-bookmark-empty"></i>
                {{ post.milestone ? post.milestone.title : '未分类' }}
              </span>
              <span>
                <span class="tag" v-for="label in post.labels" :key="label.id">{{ label.name }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="post-body">
          <MarkDown :content="post.body" target="#post"/>
        </div>
      </article>
      <div class="post-nav mt-8">
        <div class="post-pre">
          <div class="overlay"></div>
          <div class="post-meta">
            <span>上一篇</span>
            <span>{{preBlog.title}}</span>
          </div>
        </div>
        <div class="post-next">
          <div class="overlay"></div>
          <div class="post-meta" style="text-align: right;right: 3rem">
            <span>下一篇</span>
            <span>{{nextBlog.title}}</span>
          </div>
        </div>
      </div>
      <Commont :title="post.title" />

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import Banner from '@/components/Banner/Index.vue'
import { queryPost } from '@/utils/services'
import Loading from '@/components/Loading/index.vue'
import MarkDown from '@/components/MarkDown/Index.vue'
import Commont from '@/components/Comment/Index.vue'
@Component({
  components: {
    Loading,
    Banner,
    MarkDown,
    Commont
  }
})
export default class Index extends Vue {
  blogId:any;
  bannerImg:string = 'https://picsum.photos/id/2/5616/3744'
  post:string = ''
  preBlog:any;
  nextBlog:any

  created () {
    this.preBlog = this.$route.query.preBlog
    this.nextBlog = this.$route.query.nextBlog
    this.blogId = this.$route.params.id

    console.log(this.blogId)
    this.getBlogDetail(this.blogId)
  }
  mounted () {

  }

  async getBlogDetail (id:number) {
    this.post = await queryPost(id)
  }
}
</script>

<style lang="less">
  /* 滚动条 */
  .i-scroll {
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: var(--dark-color);
      background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.4) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0.4) 75%,
        transparent 75%,
        transparent
      );
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
  .blog-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    .post-header{
      width: 100%;
      margin-bottom: 10px;
      .head{
        .title{
          margin-bottom: 15px;
          &:hover{
            color: #5d9ecc;
          }
        }
        .meta{
          span{
            margin-right: 10px;
          }
          .tag{
            background: #5d9ecc;
            padding: 2px 5px;
            color:white;
          }
        }

      }
    }
    .post-body{
      .markdown{
        .blog-title{
          margin: 10px 0;
        }
        pre {
          padding: 0.12rem 0.16rem;
          line-height: 1.5;
          overflow-x: auto;
        }
        code[class*='language-'] {
          width: 100%;
          background-color: #2c3e50;
          padding: 2rem 1rem;
          font-weight: bold;
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-wrap: normal;
          tab-size: 4;
          hyphens: none;
          position: relative;
          overflow: auto;
          .i-scroll;
          &:before{
            content: "CODE";
            letter-spacing: 1px;
            position: absolute;
            font-size: 18px;
            border-radius: 3px 3px 0 0;
            left: 0;
            top: 0;
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            background-color: #303133;
            text-align: center;
            color: rgb(93, 158, 204);
          }
          &:after {
            content: "";
            position: absolute;
            top: 0.3rem;
            left: 0.5rem;
            border-radius: 50%;
            width: 0.8rem;
            height: 0.8rem;
            background: #ff5f56;
            box-shadow: 1.5rem 0 0 0 #ffbd2e, 3rem 0 0 0 #27c93f;
          }
        }
        blockquote {
          width: 96%;
          border-left: 4px solid #bcbcbc;
          background: #f6f6f6;
          padding: 0 1rem;
        }
        li{
          margin: 15px 0;
        }
        h2,h3,h4,h5{
          color: #5d9ecc;
          cursor: pointer;
        }
      }

    }
    .post-nav{
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: row;
      font-size: 0.65rem;
      color: rgba(255, 255, 255, 0.7);
      .post-pre{
        width: 50%;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-image: url("../../assets/images/banner.jpg");
        background-size: cover;
        &:hover .overlay{
          display: none;
        }
      }
      .post-next{
        width: 50%;
        position: relative;
        height: 100%;
        background: #cc9e49;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-image: url("../../assets/images/banner.jpg");
        &:hover .overlay{
          display: none;
        }
      }
      .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background-color: rgba(0, 0, 0, 0.6);
      }
      .post-meta{
        position: absolute;
        top: 2.8rem;
        left: 3rem;
        z-index: 1;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>

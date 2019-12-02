<template>
  <div class="home-main">
    <Banner :imgBackgroud="bannerImg" title="Welcome to My Blog Web, Hope You Have a Good Idea 。"/>
    <div class="content-wrapper" style="width: 70%">
        <div style="width: 100%;display: flex;flex-direction: row;justify-content: space-around">
          <aside class="left" style="width: 70%">
            <v-hover #default="{ hover }" class="blog-item mt-8" v-for="(item,index) in postsList" :key="index">
              <v-card :elevation="hover ? 12 : 4" style="border-radius: 6px" @click="ontouch(item,index)">
                <v-row class="blog-info">
                  <v-col cols="7">
                    <div class="blog-title">
                      <span>{{item.title}}</span>
                    </div>
                    <div class="blog-tool">
                      <div>
                        <v-btn icon @click="onlike">
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <span>399</span>
                      </div>
                      <div>
                        <v-btn icon>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>
                        <span>{{item.created_at.split('T')[0] }}</span>
                      </div>
                      <div>
                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                        <span>后端</span>
                      </div>
                    </div>
                    <div class="blog-desc">
                      {{item.desc}}
                    </div>
                    <div class="blog-more">
                      <v-btn icon class="mx-2">
                        <v-icon class="display-2">mdi-dots-horizontal </v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                  <v-col cols="5" class="pa-0" style="height: 100%">
                    <div style="width: 100%;height: 100%;border-radius: 0 6px 6px 0;overflow: hidden">
                      <img :src="item.cover" style="width: 100%;height: 100%;border-radius: 0 6px 6px 0">
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
            <div class="text-center mt-8">
              <v-pagination
                dark
                :length="pageLength"
                :page="searchDTO.page"
                @next="nextPage"
                @previous = "previousPage"
              ></v-pagination>
            </div>
          </aside>
          <aside class="right" style="width: 25%">
            <v-card
              class="mx-auto mt-8"
              dark
              max-width="400"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                >
                  mdi-square-edit-outline
                </v-icon>
                <span class="title font-weight-light">今日灵感</span>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                "学而时习之，不亦乐乎。"
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://picsum.photos/id/195/768/1024"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>PYY</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <v-icon class="mr-1">mdi-heart</v-icon>
                    <span class="subheading mr-2">520</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                    <span class="subheading">1314</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
            <v-card
              class="mx-auto mt-8 pb-4"
              max-width="400">
              <v-card-title>
                <v-icon
                  large
                  left
                  color="red"
                >
                  mdi-tag-multiple
                </v-icon>
                <span class="red--text font-weight-bold">热门标签</span>
              </v-card-title>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-row
                    align="center"
                    justify="start"
                  >
                    <v-btn small class="ma-1 white--text" color="red">SpringBoot</v-btn>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </aside>
        </div>
    </div>
    <Loading :hidden="loading"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import Banner from '@/components/Banner/Index.vue'
import { queryPosts, queryArchivesCount } from '@/utils/services'
import Loading from '@/components/Loading/index.vue'
import { formatPost } from '@/utils/format'
@Component({
  components: {
    Banner,
    Loading
  }
})
export default class Index extends Vue {
  bannerImg:string='https://picsum.photos/id/1008/5616/3744'
  // todo 标签列表
  tagsList:any[]=[];
  // todo 博客筛选条件
  searchDTO:any = {
    page: 1,
    pageSize: 10,
    filter: ''
  }
  // todo 博客列表
  postsList:any[]=[]
  // todo 今日灵感
  inspiration:any;
  total:number = 0;
  pageLength:number = 0;
  loading:boolean = false;
  preBlog:any = {
    title: '',
    number: 0
  };
  nextBlog:any = {
    title: '',
    number: 0
  };
  created () {

  }
  async mounted () {
    this.loading = true
    let repository = await queryArchivesCount()
    let { issues } = repository.repository
    this.total = issues.totalCount
    let num = (this.total / this.searchDTO.pageSize) > 0 ? (this.total / this.searchDTO.pageSize + 1) : (this.total / this.searchDTO.pageSize)
    this.pageLength = Math.round(num)
    this.getPostList()
  }
  async getPostList () {
    this.loading = true
    this.postsList = await queryPosts(this.searchDTO)
    console.log(this.postsList)
    formatPost(this.postsList)
    this.loading = false
  }
  nextPage () {
    if (this.searchDTO.page + 1 > this.pageLength) {
      console.log('已经是最后一页')
    } else {
      this.searchDTO.page = this.searchDTO.page + 1
      this.getPostList()
    }
  }
  previousPage () {
    if (this.searchDTO.page - 1 > 1) {
      console.log('已经是第一页')
    } else {
      this.searchDTO.page = this.searchDTO.page - 1
      this.getPostList()
    }
  }
  ontouch (data:any, index:number) {
    let preNum = index - 1
    let nextNum = index + 1
    if (preNum < 0) {
      this.preBlog.title = '已经是第一篇'
    } else {
      this.preBlog.title = this.postsList[preNum].title
      this.preBlog.number = this.postsList[preNum].number
    }
    if (nextNum >= this.postsList.length) {
      this.nextBlog.title = '已经是最后一篇'
    } else {
      this.nextBlog.title = this.postsList[nextNum].title
      this.nextBlog.number = this.postsList[nextNum].number
    }
    this.$router.push({
      path: '/blog/' + data.number,
      query: {
        nextBlog: this.nextBlog,
        preBlog: this.preBlog
      }
    })
  }
  onlike () {
    alert('你点击了喜欢')
  }
}
</script>

<style scoped lang="less">
  .home-main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .blog-item{
    img{
      cursor: pointer;
      transition: all 0.6s;/*图片放大过程的时间*/
    }
    &:hover img{
      transform: scale(1.2);/*鼠标经过图片放大的倍数*/
    }
    .blog-info{
      height: 247px;
      .blog-title{
        text-align: left;
        padding:0 1rem;
        font-size: 20px;
        font-weight: 600;
        height: 30px;
        text-overflow:ellipsis;/* 超出部分显示省略号 */
        white-space: nowrap;/*规定段落中的文本不进行换行 */
        overflow: hidden;
      }
      .blog-tool{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 1rem;
        height: 40px;
        overflow: hidden;
      }
      .blog-desc{
        text-align: justify;
        letter-spacing: 2px;
        padding: 1rem 1rem;
        overflow: hidden;
        white-space: pre-line;
        margin-top: -40px;
        text-indent: 20px;
        max-height: 160px;

      }
      .blog-more{
        padding: 0 1rem;
      }
    }
  }

</style>

<template>
  <div class="home-main">
    <Banner :imgBackgroud="bannerImg"/>
    <v-row class="content">
      <v-col cols="8">
        <v-hover #default="{ hover }" class="blog-item mt-8">
          <v-card :elevation="hover ? 12 : 4" style="border-radius: 6px">
            <v-row>
              <v-col cols="5">
                <div style="text-align: left;padding:0 15px;font-size: 20px;font-weight: 600 ">
                  <span>标题</span>
                </div>
                <v-card-actions style="display: flex;flex-direction: row;justify-content: space-between">
                  <div>
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <span>399</span>
                  </div>
                  <div>
                    <v-btn icon>
                      <v-icon>mdi-bookmark</v-icon>
                    </v-btn>
                    <span>2019-08-02</span>
                  </div>
                  <div>
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                    <span>后端</span>
                  </div>
                </v-card-actions>
                <v-card-text style="text-align: justify;letter-spacing: 2px;height: 143px">
                  sdsadkDJIOWQDMKLKJODCASJDCKQdkjl;sajkldjkaDL;ldsaDLKJAsdfjhSDJKaldcjlafcjksaCLHaxdjsajc
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="mx-2">
                    <v-icon class="display-2">mdi-dots-horizontal </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
              <v-col cols="7" class="pa-0">
                <div style="width: 100%;height: 300px;border-radius: 0 6px 6px 0;overflow: hidden">
                  <img src="https://picsum.photos/id/171/2048/1536" style="width: 100%;height: 100%;border-radius: 0 6px 6px 0">
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>

        <div class="text-center mt-8">
          <v-pagination
            :length="15"
             dark
            :total-visible="10"
          ></v-pagination>
        </div>
      </v-col>
      <v-col cols="4">
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
            "好好学习，天天向上"
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
                <v-list-item-title>Code Man丶</v-list-item-title>
              </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">45</span>
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
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import Banner from '@/components/Banner/Index.vue'
import { queryPosts, queryArchivesCount } from '@/utils/services'
@Component({
  components: {
    Banner
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
  total:number = 0
  created () {

  }
  async mounted () {
    this.total = await queryArchivesCount()
    this.getPostList()
  }
  async getPostList () {
    this.postsList = await queryPosts(this.searchDTO)
    console.log(this.postsList)
  }
}
</script>

<style scoped lang="less">
  .home-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    .content{
      width: 70%;
    }
  }
  .blog-item{
    img{
      cursor: pointer;
      transition: all 0.6s;/*图片放大过程的时间*/
    }
    &:hover img{
      transform: scale(1.2);/*鼠标经过图片放大的倍数*/
    }
  }

</style>

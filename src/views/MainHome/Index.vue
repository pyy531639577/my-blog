<template>
  <div class="home-main">
    <Banner :imgBackgroud="bannerImg"/>
    <v-row class="content">
      <v-col cols="8">
        <v-hover #default="{ hover }" class="mt-8">
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
                <div style="width: 100%;height: 300px;border-radius: 0 6px 6px 0">
                  <img src="https://picsum.photos/id/171/2048/1536" style="width: 100%;height: 100%;border-radius: 0 6px 6px 0">
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
        <v-hover #default="{ hover }" class="mt-8">
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
                <div style="width: 100%;height: 300px;border-radius: 0 6px 6px 0">
                  <img src="https://picsum.photos/id/171/2048/1536" style="width: 100%;height: 100%;border-radius: 0 6px 6px 0">
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
        <v-hover #default="{ hover }" class="mt-8">
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
                <div style="width: 100%;height: 300px;border-radius: 0 6px 6px 0">
                  <img src="https://picsum.photos/id/171/2048/1536" style="width: 100%;height: 100%;border-radius: 0 6px 6px 0">
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
        <v-hover #default="{ hover }" class="mt-8">
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
                <div style="width: 100%;height: 300px;border-radius: 0 6px 6px 0">
                  <img src="https://picsum.photos/id/171/2048/1536" style="width: 100%;height: 100%;border-radius: 0 6px 6px 0">
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
        <v-hover #default="{ hover }" class="mt-8">
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
                <div style="width: 100%;height: 300px;border-radius: 0 6px 6px 0">
                  <img src="https://picsum.photos/id/171/2048/1536" style="width: 100%;height: 100%;border-radius: 0 6px 6px 0">
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
        <v-hover #default="{ hover }" class="mt-8">
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
                <div style="width: 100%;height: 300px;border-radius: 0 6px 6px 0">
                  <img src="https://picsum.photos/id/171/2048/1536" style="width: 100%;height: 100%;border-radius: 0 6px 6px 0">
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
        <v-hover #default="{ hover }" class="mt-8">
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
                <div style="width: 100%;height: 300px;border-radius: 0 6px 6px 0">
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

  }
  // todo 今日灵感
  inspiration:any;
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
  .tag-style{
    margin-left: 20px;
    padding: 0 10px 0 12px;
    background: #42a6f8;
    color: #fafafa;
    text-decoration: none;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    display: inline-block;
    height: 28px;
    line-height: 28px;
    position: relative;
    font-size: 12px;
    margin-bottom: 1rem;
    &:hover{
      background: #1976d2;
      color: #fafafa;
      transition: all 300ms linear;
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
  }
  .tag-style::before{
    content: '';
    position: absolute;
    top: 0;
    left: -14px;
    border-color: transparent #42a6f8 transparent transparent;
    border-style: solid;
    border-width: 14px 14px 14px 0;
  }
  .tag-style::after{
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fafafa;
    box-shadow: -1px -1px 1px 0 rgba(0, 0, 0, 0.3);
  }
</style>

<template>
  <div class="home">
    <div class="banner">
       <div class="attach">
         <div class="info">
           <div class="info-title">
             <span>人生要有梦想，有梦想就要勇敢去追求，别放弃。</span>
           </div>
           <ul>
             <li>
               <el-button icon="el-icon-arrow-left" type="text"></el-button>
             </li>
             <li v-for="(item,key) in contactList" :key="key">
               <a :href="item.link" target="_blank">
                 <img :src="item.icon"  class="icon-font">
               </a>
               <div v-if="item.img" class="code">
                 <img :src="item.img">
               </div>
             </li>
             <li>
               <el-button icon="el-icon-arrow-right" type="text"></el-button>
             </li>
           </ul>
         </div>
       </div>
    </div>
    <div class="content">
      <el-card shadow="none" class="notify">
        <div v-html="notify"></div>
      </el-card>
      <Article :articleList="articleList" :number="totalCount"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import config from '@/config/index'
import Article from '../components/Article/Index.vue'
import { queryPosts, queryArchivesCount } from '@/utils/services'
import format from '@/utils/format'
@Component({
  components: {
    Article
  }
})
export default class Home extends Vue {
  contactList:any[] = config.contact;
  notify:string = config.notify
  totalCount:number = 0
  articleList:any[] = []
  async mounted () {
    this.totalCount = await queryArchivesCount()
    let result = await queryPosts({})
    this.articleList = result
    console.log(result)
  }
}
</script>

<style scoped lang="less">
  .home{
    width: 100vw;
    min-height: 100vh;
    transition: 1s opacity linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    .banner{
      background: url("../assets/images/banner.jpg") fixed;
      background-size: cover;
      width: 100%;
      height: 100vh;
      position: relative;
      .attach{
        position: absolute;
        width: 100%;
        height: 12rem;
        top: 28rem;
        display: flex;
        justify-content: center;
        .info{
          width: 34%;
          height: 100%;
          border-radius: 6px;
          background: rgba(58, 58, 58, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          .info-title:before{
            content: "“";
            position: absolute;
            font-size: 40px;
            font-weight: 600;
            top: 2px;
            left: 5px;
          }
          .info-title:after{
            content: "”";
            position: absolute;
            font-size: 40px;
            font-weight: 600;
            bottom: 91px;
            right: 16px;
          }
          .info-title{
            font-size: 1.2rem;
            color: white;
            margin: 2rem 0;
            &:hover{
              font-weight: 600;
            }
          }
          ul{
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 97%;
            li:first-child,li:last-child{
              color: darkseagreen;
              transition: none;
              font-size: 50px;
            }
            li {
              transition: all ease-in-out .5s;
              position: relative;
              .el-button{
                font-size: 50px;
              }
              &:hover{
                cursor: pointer;
                transform: rotate(360deg);
                /*animation: move infinite;*/
              }
              &:hover .code{
                display: block;
                /*transition: all ease-in-out .5s;*/
              }
              .code{
                position: absolute;
                display: none;
                top: 7rem;
                right: -5rem;
                width: 13rem;
                height: 13rem;
                background: rgba(0,0,0,.6);
                &:before{
                  content: '';
                  border: 1rem solid transparent;
                  border-bottom-color: rgba(0, 0, 0, 0.6);
                  position: absolute;
                  top: -32px;
                  left: 85px;
                }
                img{
                  margin: 1rem;
                  width: 11rem;
                  height: 11rem;
                  border-radius: 6px;
                  opacity: .6;
                }
              }
            }
          }
          .icon-font{
            width: 50px;
            margin-top: 10px;
          }
        }
      }
    }
    .content{
      width: 60%;
      height: 1200px;
      .notify{
        margin-top: 4rem;
        height: 5rem;
        text-align: left;
      }

    }
  }
</style>

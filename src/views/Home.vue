<template>
  <div class="home">
    <div class="banner">
       <div class="attach">
         <div class="info">
           <div class="info-title">
             <span>人生要有梦想，有梦想就要勇敢去追求，别放弃。</span>
           </div>
           <ul>
             <li><i class="el-icon-arrow-left icon-font"></i></li>
             <li><i class="iconfont icon-weixin icon-font"></i></li>
             <li><i class="iconfont icon-mayun icon-font"></i></li>
             <li><i class="iconfont icon-Githeibai icon-font"></i></li>
             <li><i class="iconfont icon-zhifubaorenzheng icon-font"></i></li>
             <li><i class="iconfont icon-QQ icon-font"></i></li>
             <li><i class="iconfont icon-mail icon-font"></i></li>
             <li><i class="el-icon-arrow-right icon-font"></i></li>
           </ul>
         </div>
       </div>
    </div>
    <div class="content">
      hahahha
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="less">
  .home{
    width: 100vw;
    min-height: 100vh;
    transition: 1s opacity linear;
    .banner{
      background: url("../assets/images/banner.jpg") fixed;
      background-size: cover;
      width: 100%;
      height: 100vh;
      position: relative;
      .attach{
        position: absolute;
        width: 100%;
        height: 7rem;
        top: 28rem;
        display: flex;
        justify-content: center;
        .info{
          width: 50%;
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
            bottom: 35px;
            right: 51px;
          }
          .info-title{
            font-size: 1.2rem;
            color: white;
            margin: 1rem 0;
          }
          & ul{
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 77%;
            & li:first-child,li:last-child{
              color: darkseagreen;
            }
            & li:hover{
              color: cornflowerblue;
              cursor: pointer;
            }
          }
          .icon-font{
            font-size: 34px;
          }
        }
      }
    }
    .content{
      width: 100%;
      height: 200px;

    }
  }
</style>

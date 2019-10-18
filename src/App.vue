<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
    <scorll-to-top/>
  </div>
</template>

<script lang="ts">
import Header from './components/Header/Index.vue'
import Footer from './components/Footer/Index.vue'
import ScorllToTop from './components/ScorllToTop/Index.vue'
import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Header,
      Footer,
      ScorllToTop
    }
  })
export default class App extends Vue {}
</script>

<style lang="less">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
#app {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 6px;
    height: 0
  }
  /*定义滚动条轨道*/
  ::-webkit-scrollbar-track {
    background-color: transparent;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    background-color: #666666;
    background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.4) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.4) 50%,rgba(255,255,255,.4) 75%,transparent 75%,transparent);
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em
  }
</style>

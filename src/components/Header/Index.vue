<template>
  <header class="my-blog-header">
    <a class="logo">我的博客</a>
    <nav class="menu">
      <ul>
        <li class="nav-item">
          <a>
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </a>
        </li>
        <li class="nav-item">
          <a>
            <i class="el-icon-s-home"></i>
            <span>归档</span>
          </a>
        </li>
        <li class="nav-item">
          <a>
            <i class="el-icon-s-home"></i>
            <span>分类</span>
          </a>
        </li>
        <li class="nav-item">
          <a>
            <i class="el-icon-s-home"></i>
            <span>标签</span>
          </a>
        </li>
        <li class="nav-item">
          <a>
            <i class="el-icon-s-home"></i>
            <span>灵感</span>
          </a>
        </li>
        <li class="nav-item">
          <a>
            <i class="el-icon-s-home"></i>
            <span>关于我</span>
          </a>
        </li>
        <li class="nav-item">
          <el-button icon="el-icon-search serach-btn" type="text"></el-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {

  mounted() {
      window.addEventListener('scroll', this.handleScroll)
  }
  // 监听页面滚动
  handleScroll() {
    this.handleTop()
  }
  // 处理滚动事件
  handleTop() {
    // 更新顶部进度条
    const pageYOffset = window.pageYOffset
    console.log("pageYOffset",pageYOffset)
    if (pageYOffset>0){
      let el = document.getElementsByTagName("header");
      for (let i = 0; i < el.length; i++) {
        el.item(i).style.backgroundColor = "#f4f4f4"
      }
      console.log(el)
    }else {
      let el = document.getElementsByTagName("header");
      for (let i = 0; i < el.length; i++) {
        el.item(i).style.backgroundColor = ""
      }
    }

    // 判断位置，控制滚动到顶部
  }
}
</script>

<style scoped lang="less">
  @import "./index.less";
</style>

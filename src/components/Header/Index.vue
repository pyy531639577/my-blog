<template>
  <header class="my-blog-header" :class="isTop? '' : 'header-background '">
    <a class="logo">我的博客</a>
    <nav class="menu">
      <ul>
        <li class="nav-item" v-for="(item,key) in menu" :key="key">
          <a :href="item.url">
            <i class="iconfont" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import config from '@/config/index'
@Component({})
export default class Index extends Vue {
  menu:any[] = config.menu;
  isTop:boolean = false;

  created () {
    this.handleTop()
    window.addEventListener('scroll', this.handleTop)
  }
  // 处理滚动事件
  handleTop () {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    if (!top) {
      this.isTop = true
    } else {
      this.isTop = false
    }
    // 判断位置，控制滚动到顶部
  }
}
</script>

<style scoped lang="less">
  @import "./index.less";
</style>

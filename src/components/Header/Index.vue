<template>
  <header class="my-blog-header">
    <a class="logo">博客名称</a>
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

}
</script>

<style scoped lang="less">
  @import "./index.less";
</style>

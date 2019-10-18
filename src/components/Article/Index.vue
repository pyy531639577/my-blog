<template>
  <div class="article-content">
    <el-row :gutter="20">
      <el-col :span="12" v-for="(item,key) in articleList" :key="key">
        <div class="item">
          <div class="title">
            <h1>{{item.title}}</h1>
          </div>
          <div class="description">
            <p>
              Stream 是 Java 8 新增加的类，用来补充集合类。它可以让你以一种声明的方式处理数据。
              Stream API 可以极大提高 Java 程序员的生产力，让程序员写出高效率、干净、简洁的代码
            </p>
          </div>
          <div class="meta">
            <span style="margin-right: 5px">
              <i class="el-icon-date"></i>
               {{item.created_at.split('T')[0] }}
            </span>
            <span style="margin-right: 5px">
              <i class="el-icon-sunny"></i>
            热度{{item.comments}}℃
            </span>
            <span style="margin-right: 5px">
              <i class="el-icon-star-off"></i>
              {{item.milestone.title}}
          </span>
            <span style="margin-right: 5px">
            <i class="el-icon-s-flag"></i>
              <span>
              {{item.labels.map(m => m.name ).join(" ")}}
              </span>
           </span>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  @Prop({ type: Array })
  articleList:any[] = []
  @Prop({ type: Number })
  total:number = 0
}
</script>

<style scoped lang="less">
  .article-content{
    margin-top: 40px;
    .item{
      width: 100%;height: 400px;
      background-image: url("../../assets/images/defaultCover.jpg");
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background-color: rgba(255, 255, 255, 0.66);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.24) 0px 3px 6px;
      border-radius: 0.03rem;
      overflow: hidden;
      .title{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: left;
        text-indent: 20px;
        background: hsla(0, 0%, 100%, 0.5)
      }
      .description{
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
        min-height: 0;
        padding: 0.22rem 0.34rem;
        font-size: 18px;
        letter-spacing: 0.4px;
        text-align: justify;
      }
      .meta{
        display: flex;
        height: 2.5rem;
        line-height:  2.5rem;;
        background: rgba(255, 255, 255, 0.8);
        font-size: 18px;
        padding: 0.12rem 0.34rem;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
      }
    }
  }
</style>

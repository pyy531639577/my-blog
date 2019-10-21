<template>
  <div class="article-content">
    <transition name="el-fade-in">
      <v-row :gutter="20" v-show="articleList.length">
        <v-col :span="12" v-for="(item,key) in articleList" :key="key">
          <v-hover #default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              class="mx-auto">
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              >
                <v-card-title class="title">{{item.title}}</v-card-title>
              </v-img>
              <v-card-text class="text--primary">
                <div class="content">
                  <p>
                  Stream 是 Java 8 新增加的类，用来补充集合类。它可以让你以一种声明的方式处理数据。
                  Stream API 可以极大提高 Java 程序员的生产力，让程序员写出高效率、干净、简洁的代码
                 </p>
               </div>
              </v-card-text>
              <div class="meta">
                <v-chip-group  column>
                  <span> <v-icon>mdi-calendar-range</v-icon>{{ item.created_at.split('T')[0] }}</span>
                  <span><v-icon>mdi-fire </v-icon>0</span>
                </v-chip-group>
                <v-chip-group  column>
                  <v-chip small v-for="label in item.labels.slice(0, 2)" :key="label.id" :color="`#${label.color}`" text-color="white">
                    <span style="color: white">{{ label.name }}</span>
                  </v-chip>
                </v-chip-group>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  @Prop({ type: Array, default: () => { return [] } })
  articleList :any;
  @Prop({ type: Number, default: 0 })
  total:number = 0
}
</script>

<style scoped lang="less">
  .article-content{
    margin-top: 40px;
    .title{
      background: rgba(44, 62, 80, 0.5);;
      color: #f4f4f4;
    }
    .content{
      width: 100%;
      text-align: justify;
      letter-spacing: .1rem;
      font-size: 1.2rem;
    }
    .meta{
      width: 100%;
      padding: 0 0.5rem;
    }
  }
</style>

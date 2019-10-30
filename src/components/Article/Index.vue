<template>
  <div class="article-content">
    <transition name="el-fade-in">
      <v-row v-show="articleList.length">
        <v-col cols="6" v-for="(item,key) in articleList" :key="key">
          <v-hover #default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 4"
              class="mx-auto article-content-item">
              <v-img
                class="article-img"
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              >
                <v-card-title class="title">{{item.title}}</v-card-title>
              </v-img>
              <v-card-text class="text--primary">
                <div class="content">
                  <p>
                  {{item.desc}}
                 </p>
               </div>
              </v-card-text>
              <div class="meta">
                <v-chip-group  column>
                  <span> <v-icon>mdi-calendar-range</v-icon>{{ item.created_at.split('T')[0] }}</span>
                  <span class="ml-2"><v-icon>mdi-fire </v-icon> 热度1℃ </span>
                  <span class="ml-2"><v-icon>mdi-folder-open-outline  </v-icon> {{ item.milestone?item.milestone.title:'未分类'}}</span>
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
    .article-content-item{
      cursor: pointer;
      .title{
        background: rgba(44, 62, 80, 0.5);
        font-weight: bolder;
        color: #f4f4f4;
        &:hover{
          color: #5d9ecc;
        }
      }
      .content{
        width: 100%;
        height: 100px;
        overflow: hidden;
        text-align: justify;
        letter-spacing: .1rem;
        font-size: 1.2rem;
        &:hover p{
          text-decoration: underline;
        }
      }
      .meta{
        width: 100%;
        padding: 0 0.5rem;
      }
    }

  }
</style>

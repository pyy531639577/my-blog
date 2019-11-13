<template>
  <div class="tags">
    <Banner :imgBackgroud="bannerImg" title="Tag For Every Blog"/>
    <div class="content mt-8">
      <v-btn v-for="(tag,key) in tagsList" :key="key " depressed dark class="item" :color="`#${tag.color}`" @click="checked(tag)">
        <span>{{tag.name}}</span>
      </v-btn>
    </div>
    <div class="mt-8" style="width: 50%;display: flex;flex-direction: row;border-bottom: 2px solid black" v-if="checkTagList">
      <v-chip
        v-for="(item,key ) in checkTagList"
        :key="key"
        class="ma-2"
        close
        :color="item?`#${item.color}`:''"
        text-color="white"
        @click:close="closeTag(item,key)"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        {{item?item.name:''}}
      </v-chip>
    </div>
    <Loadding :hidden="loadding"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import { queryTag } from '@/utils/services'
import Loadding from '@/components/Loading/index.vue'
import Banner from '@/components/Banner/Index.vue'
  @Component({
    components: {
      Banner,
      Loadding
    }
  })
export default class Index extends Vue {
    bannerImg:string='https://picsum.photos/id/2/5616/3744'
    tagsList:any[]=[]
    loadding:boolean = false
    checkTagList:any[] = []
    created () {
      this.loadding = true
    }
    mounted () {
      queryTag().then(res => {
        this.tagsList = res
        this.loadding = false
      }).catch((err) => {
        console.log(err)
        this.loadding = false
      })
    }
    checked (tag:any) {
      let checkTag = tag
      if (this.checkTagList.includes(checkTag)) {

      } else {
        this.checkTagList.push(checkTag)
      }
    }
    closeTag (data:any, key:number) {
      this.checkTagList.splice(key, 1)
    }
}
</script>

<style scoped lang="less">
  .tags{
    display: flex;
    flex-direction: column;
    height: 85vh;
    align-items: center;
    .content{
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      .item{
        margin: 0.2rem 0.6rem;
      }
    }
  }
</style>

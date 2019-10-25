<template>
  <div class="tags">
    <Banner :imgBackgroud="bannerImg"/>
    <div class="content mt-8">
      <v-btn v-for="(tag,key) in tagsList" :key="key " depressed dark class="item" :color="`#${tag.color}`">
        <span>{{tag.name}}</span>
      </v-btn>
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
      justify-content: start;
      flex-wrap: wrap;
      .item{
        margin: 0.2rem 0.6rem;
      }
    }
  }
</style>

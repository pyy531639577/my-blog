<template>
  <div class="category">
    <Banner :imgBackgroud="bannerImg"/>
    <v-row class="content mt-8">
      <v-col cols="4" v-for="(category,key) in categoryList" :key="key">
        <v-hover #default="{ hover }">
          <v-card :elevation="hover ? 12 : 2"
          color="primary"
          dark
          style="height: 100px"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="category.title"
              ></v-card-title>

              <v-card-subtitle style="text-align: justify" v-text="category.description"></v-card-subtitle>
            </div>
            <span class="display-1 ma-2">{{category.number}}</span>
          </div>
        </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <Loadding :hidden="loadding"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import { queryCategory } from '@/utils/services'
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
  categoryList:any[]=[]
  loadding:boolean = false
  created () {
    this.loadding = true
  }
  mounted () {
    queryCategory().then(res => {
      this.categoryList = res
      this.loadding = false
    }).catch(err => {
      console.log(err)
      this.loadding = false
    })
  }
}
</script>

<style scoped lang="less">
  .category{
    display: flex;
    flex-direction: column;
    align-items: center;
    .content{
      width: 60%;
    }
  }
</style>

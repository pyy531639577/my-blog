<template>
  <div class="archive">
    <Banner :imgBackgroud="bannerImg"/>
    <v-row class="content mt-8">
      <v-timeline align-top style="width: 100%">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :icon="item.icon"
          fill-dot
        >
          <v-card
            dark
          >
            <v-card-title class="title">2019-10-23</v-card-title>
            <v-card-text class="white text--primary display-1" style="text-align: justify">
              <p>Lorem ipsum dolor sit ameandi sententiae.</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-btn class="mx-2" fab dark small color="error" @click="searchMore">
          <v-icon dark>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-timeline>
    </v-row>
    <Loadding :hidden="loading"/>
    <h1>归档</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import Loadding from '@/components/Loading/index.vue'
import Banner from '@/components/Banner/Index.vue'
@Component({
  components: {
    Banner,
    Loadding
  }
})
export default class Index extends Vue {
  bannerImg:string='https://picsum.photos/id/1021/2048/1206'
  items:any = [
    {
      color: 'red lighten-2',
      icon: 'mdi-star'
    },
    {
      color: 'purple darken-1',
      icon: 'mdi-book-variant'
    },
    {
      color: 'green lighten-1',
      icon: 'mdi-airballoon'
    },
    {
      color: 'indigo',
      icon: 'mdi-buffer'
    }
  ]
  loading:boolean = false
  blogs:any[] =[]

  searchMore () {
    this.loading = !this.loading
  }
  mounted () {

  }
}
</script>

<style scoped lang="less">
  .archive{
    display: flex;
    flex-direction: column;
    align-items: center;
    .content{
      width: 60%;
    }
  }

</style>

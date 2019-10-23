<template>
  <div class="category">
    <Banner :imgBackgroud="bannerImg"/>
    <v-row class="content mt-8">
      <v-col cols="4">
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
              >后端</v-card-title>

              <v-card-subtitle style="text-align: justify">主要关于Java、SpringBoot等方面的文章</v-card-subtitle>
            </div>
            <span class="display-1 ma-2">56</span>
          </div>
        </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
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
              >后端</v-card-title>

              <v-card-subtitle style="text-align: justify">主要关于Java、SpringBoot等方面的文章</v-card-subtitle>
            </div>
            <span class="display-1 ma-2">56</span>
          </div>
        </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
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
                >后端</v-card-title>

                <v-card-subtitle style="text-align: justify">主要关于Java、SpringBoot等方面的文章</v-card-subtitle>
              </div>
              <span class="display-1 ma-2">56</span>
            </div>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
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
                >后端</v-card-title>

                <v-card-subtitle style="text-align: justify">主要关于Java、SpringBoot等方面的文章</v-card-subtitle>
              </div>
              <span class="display-1 ma-2">56</span>
            </div>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
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
                >后端</v-card-title>

                <v-card-subtitle style="text-align: justify">主要关于Java、SpringBoot等方面的文章</v-card-subtitle>
              </div>
              <span class="display-1 ma-2">56</span>
            </div>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
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
                >后端</v-card-title>

                <v-card-subtitle style="text-align: justify">主要关于Java、SpringBoot等方面的文章</v-card-subtitle>
              </div>
              <span class="display-1 ma-2">56</span>
            </div>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
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
                >后端</v-card-title>

                <v-card-subtitle style="text-align: justify">主要关于Java、SpringBoot等方面的文章</v-card-subtitle>
              </div>
              <span class="display-1 ma-2">56</span>
            </div>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
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
                >后端</v-card-title>

                <v-card-subtitle style="text-align: justify">主要关于Java、SpringBoot等方面的文章</v-card-subtitle>
              </div>
              <span class="display-1 ma-2">56</span>
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
    setTimeout(() => {
      this.loadding = false
    }, 2000)
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

<template>
  <div class="home">
    <div class="banner">
       <div class="attach">
         <div class="attach-info">
           <div class="info-title">
             <span>人生要有梦想，有梦想就要勇敢去追求，别放弃。</span>
           </div>
           <ul>
             <li>
               <el-button icon="el-icon-arrow-left" type="text"></el-button>
             </li>
             <li v-for="(item,key) in contactList" :key="key">
               <a :href="item.link" target="_blank">
                 <img :src="item.icon"  class="icon-font">
               </a>
               <div v-if="item.img" class="code">
                 <img :src="item.img">
               </div>
             </li>
             <li>
               <el-button icon="el-icon-arrow-right" type="text"></el-button>
             </li>
           </ul>
         </div>
       </div>
    </div>
    <div class="content">
      <v-banner class="mt-4" elevation="0.5" single-line >
        <v-icon
          slot="icon"
          color="warning"
          size="36"
        >
          mdi-bell-ring
        </v-icon>
        {{notify}}
      </v-banner>
      <Article :articleList="articleList" :number="totalCount"/>
      <v-btn color="error" class="mt-4">More<v-icon>mdi-plus</v-icon></v-btn>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import config from '@/config'
import Article from '../../components/Article/Index.vue'
import { queryPosts, queryArchivesCount } from '@/utils/services'
@Component({
  components: {
    Article
  }
})
export default class Home extends Vue {
  contactList:any[] = config.contact
  notify:string = config.notify
  totalCount = ''
  articleList = []
  searchDTO:any = {
    page: 1,
    pageSize: 10,
    filter: ''
  }

  async mounted () {
    this.totalCount = await queryArchivesCount()
    let result = await queryPosts(this.searchDTO)
    this.articleList = result
    console.log(result)
  }
}
</script>

<style scoped lang="less">
  @import "./home.less";
</style>

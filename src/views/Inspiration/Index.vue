<template>
  <div class="inspiration">
    <Banner :imgBackgroud="bannerImg" title="My Inspiration Come Form Life"/>
    <div class="inspiration-body">
      <v-hover #default="{ hover }" v-for="(item,index) in inspirationList" :key="index">
        <v-card :elevation="hover ? 8 : 2" class="inspiration-item mt-8" :style="{ borderTop: '2px solid '+item.color }">
            <div class="label" :style="{ color: item.color }">
              <span>{{item.createDate}}</span>
            </div>
            <div class="markdown">
              <p>{{item.body}}</p>
           </div>
        </v-card>
      </v-hover>
      <div class="my-2 mt-10">
        <v-btn color="error" outlined  fab large dark @click="searchMore">
          <v-icon>mdi-alarm</v-icon>
        </v-btn>
      </div>
    </div>
    <Loading :hidden="loading"/>
    <v-snackbar
      v-model="alter.open"
      :top = "alter.position === 'top'"
      timeout="3000"
    >
      {{ alter.text }}
      <v-btn
        color="pink"
        text
        @click="alter.open = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import Banner from '@/components/Banner/Index.vue'
import { queryInspirationCount, queryInspiration  } from '@/utils/services'
import Loading from '@/components/Loading/index.vue'
import moment from 'moment'
@Component({
  components: {
    Banner,
    Loading
  }
})
export default class Index extends Vue {
  bannerImg:string='https://picsum.photos/id/1008/5616/3744';
  itemColor:any[] = [
    "rgb(249, 191, 69)","rgb(134, 193, 102)","rgb(185, 136, 125)","rgb(241, 148, 131)","rgb(178, 143, 206)",
    "rgb(134, 120, 53)","rgb(46, 169, 223)","rgb(231, 148, 96)","rgb(245, 150, 170)"
  ];
  inspirationList:any[] = [];
  total:number = 0;
  loading:boolean = false;
  searchDTO:any = {
    page:1,
    pageSize:10
  }
  alter:any = {
    open:false,
    text:"",
    position:'top'
  }
  mounted(){
    this.getList();
  }
  async getList(){
    this.loading = true;
    let res = await queryInspirationCount()
    this.total = res.repository.issues.totalCount;
    let res2 = await queryInspiration(this.searchDTO);
    this.inspirationList = res2;
    this.inspirationList.forEach((v,k) => {
      v.createDate = moment(v.created_at).format("YYYY年MM月DD日");
      v.color = this.itemColor[k]
    });
    this.loading = false;
  }

  searchMore(){
    let min = this.searchDTO.page * 10;
    if (this.total>min){
      this.searchDTO.page = this.searchDTO.page +1;
      this.getList();
    } else {
      this.alter.open = true;
      this.alter.text = "没有更多了"
    }
  }


}
</script>

<style scoped lang="less">
.inspiration{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .inspiration-body{
    width: 60%;
    min-height: 600px;
    .inspiration-item{
      margin-bottom: 16px;
      padding: 14px 16px;
      text-align: justify;
      overflow: unset;
      border-radius: 3px;
      background-color: hsla(0,0%,100%,.65);
      &:hover{
        transform: translateY(-4px);
      }
      .label{
        display: inline-block;
        position: relative;
        left: -32px;
        margin-bottom: 10px;
        padding: 0 14px 0 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 0 3px 3px 0;
        background-color: currentColor;
        span{
          color: #f4f4f4;
          font-family: cursive;
          font-size: 19px;
        }
        &::after{
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 0;
          height: 0;
          background-color: transparent;
          border-style: solid;
          border-width: 0 16px 16px 0;
          border-color: transparent;
          border-right-color: currentColor;
          -webkit-filter: brightness(120%);
          filter: brightness(120%);
        }
      }
      .markdown{
        margin: 0 16px 25px;
      }
    }
  }

}
</style>

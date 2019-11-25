<template>
  <div class="banner">
    <v-img :src="imgBackgroud" aspect-ratio="1.7" height="500px"></v-img>
    <div class="banner-desc">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  @Prop({ type: String, default: '' })
  imgBackgroud:any
  @Prop({type:String ,default: ''})
  title:any
}
</script>

<style scoped lang="less">
  .banner{
    width: 100%;
    height: 500px;
    position: relative;
    .banner-desc{
      position: absolute;
      width: 100%;
      bottom: 50px;
      height: 100px;
      line-height: 100px;

      color: #f4f4f4;
    }
  }
</style>

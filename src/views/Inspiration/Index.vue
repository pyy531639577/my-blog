<template>
  <div>
    <Banner :imgBackgroud="bannerImg"/>
    <h1>灵感页面</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import Banner from '@/components/Banner/Index.vue'
@Component({
  components: {
    Banner
  }
})
export default class Index extends Vue {
  bannerImg:string='https://picsum.photos/id/1008/5616/3744'
}
</script>

<style scoped lang="less">

</style>

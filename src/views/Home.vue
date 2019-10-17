<template>
  <div class="home">
    <Header/>
    <img alt="Vue logo" src="../assets/images/banner.jpg" class="img-style">
    <h1>你好</h1>
    <Test/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Header from '../components/Header/Index.vue'
import Footer from '../components/Footer/Index.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="less">
  .img-style{
    width: 100%;
    height: cacl(100);
  }
</style>

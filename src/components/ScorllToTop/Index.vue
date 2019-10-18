<template>
  <div class="back-to-top" @click="turnToTop" :style="{ top: visible ? '-10px' : '-90vh' }">
    <img src="../../assets/images/backtop.png"  alt="backTop"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  visible:boolean = false;

  created () {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    const clientHeight = document.documentElement.clientHeight
    if (top) {
      this.visible = true
    }
    window.addEventListener('scroll', () => {
      const tops = document.documentElement.scrollTop || document.body.scrollTop
      this.visible = tops > (clientHeight - 60)
    })
  }

  turnToTop () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
</script>

<style scoped lang="less">
  .back-to-top {
    position: fixed;
    right: 0.36rem;
    transition: 600ms all cubic-bezier(0.25, 0.1, 0.3, 1.5);
    outline: none;
    img {
      cursor: pointer;
      max-height: 76vh;
      transform-origin: top;
      -webkit-animation: grow 3.6s infinite ease-in-out;
      animation: grow 3.6s infinite ease-in-out;
    }
  }
  @keyframes grow {
    33% {
      -webkit-transform: rotate(1.3deg);
      transform: rotate(1.3deg);
    }
    66% {
      -webkit-transform: rotate(1deg);
      transform: rotate(1deg);
    }
  }
</style>

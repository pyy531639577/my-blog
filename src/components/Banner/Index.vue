<template>
  <div class="banner">
    <v-img src="https://picsum.photos/id/1004/5616/3744" aspect-ratio="1.7" height="500px"></v-img>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
}
</script>

<style scoped lang="less">
  .banner{
    width: 100%;
    height: 500px;
  }
</style>

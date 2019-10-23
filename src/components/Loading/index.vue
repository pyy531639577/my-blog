<template>
  <v-overlay :value="hidden" style="z-index: 11">
    <v-btn
      icon
    >
      <div class="loading">
        <img :src="$config.loadingImg" alt />
        <span>正在拼命加载中...</span>
      </div>
    </v-btn>
  </v-overlay>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
    @Prop({ type: Boolean, default: false })
    hidden:any
}
</script>
<style lang="less" scoped>
.loading {
  display: flex;
  flex-direction: column;
  img {
    margin: 1rem auto;
    width: 4rem;
  }
}
</style>

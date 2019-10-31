<template>
  <div id="gitalk" ></div>
</template>

<script lang="ts">
// @ts-ignore
import Gitalk from '../../../node_modules/gitalk'
import 'gitalk/dist/gitalk.css'
import config from '../../config/index'
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  @Prop({ type: String, default: '' })
  title:any

  mounted () {
    this.renderGitalk()
  }

  renderGitalk () {
    const gitalk = new Gitalk({
      ...config.gitalk,
      title: this.title
    })
    gitalk.render('gitalk')
  }
}
</script>

<style scoped lang="less">

</style>

<template>
  <div class="markdown" v-html="html"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

import marked from 'marked'
import hljs from '@/assets/lib/highlight'

// const zooming = new Zooming({
//   bgOpacity: 0,
//   zIndex: 100
// })

const renderer = new marked.Renderer()
var index = 0
renderer.heading = function (text:any, level:number, raw:any, slugger:any) {
  index = index + 1
  const icon = ['el-icon-s-promotion', ' el-icon-caret-right', 'el-icon-paperclip'][level - 2]
  return `<h${level} id="header-${index}" class="blog-title"><i class="${icon}"></i>${text}</h${level}>`
}

renderer.image = function (href:string, title:string, text:string) {
  return `<span><img class="img-zoomable" src="${href}" loading="lazy" alt="${text}" />${
    text ? `<span>◭ ${text}</span>` : ''
  }</span>`
}

renderer.link = function (href:string, title:string, text:string) {
  // 只显示一个图标
  if (text.includes('icon')) {
    return `<a href="${href}" target="_blank">${text}</a>`
  }
  return `<a href="${href}" target="_blank"><i class="icon"></i>${text}</a>`
}

// Table 包裹元素，使之可以横向滚动
renderer.table = function (header:any, body:any) {
  if (body) body = `<tbody>${body}</tbody>`
  return `<div class="table-wrapper">\n<table>\n<thead>\n${header}</thead>\n${body}</table>\n</div>\n`
}

marked.setOptions({
  renderer,
  highlight: (code:any) => hljs.highlightAuto(code).value
})

@Component({})
export default class Index extends Vue {
  @Prop({ type: String, default: '' })
  content:any
  @Prop({ type: String, default: '' })
  target:any
  html:any = ''
  lg:any = ''

  marked () {
    this.html = marked(this.content)

    // 对于只是纯解析文字不需要代码高亮和灯箱
    if (!this.target) return
    this.$nextTick(() => {
      hljs.initLineNumbersOnLoad({ target: this.target })
      // zooming.listen('.img-zoomable')
    })
  }

  created () {
    this.marked()
  }
  // @Watch('content')
  // setContent () {
  //   this.marked()
  // }
  beforeDestroy () {
    // zooming.close()
  }
}
</script>

<style lang="less">

</style>

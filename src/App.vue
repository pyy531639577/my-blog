<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <router-view/>
  </div>
</template>

<style lang="less">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
    <SiteC></SiteC>
    <BackTop></BackTop>
  </div>
</template>

<script>
import SiteC from './components/Site'
import BackTop from './components/BackTop'

export default {
  name: 'App',
  components: {
    SiteC,
    BackTop
  }
}
</script>

<style lang="scss">
  blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,pre,td,textarea,th,ul {
    margin: 0;
    padding: 0
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  fieldset,img {
    border: 0
  }

  address,caption,cite,code,dfn,em,strong,th,var {
    font-style: normal;
    font-weight: 400
  }

  li,ol,ul {
    list-style: none
  }

  caption,th {
    text-align: left
  }

  h1,h2,h3,h4,h5,h6 {
    font-size: 100%;
    font-weight: 400
  }

  abbr,acronym {
    border: 0
  }

  input,textarea {
    resize: none
  }

  button {
    overflow: visible;
    width: auto;
    margin: 0;
    padding: 0;
    border: 0 none;
    outline: 0;
    cursor: pointer
  }

  a {
    text-decoration: none;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }

  .clearfix {
    display: inline-block
  }

  .clearfix {
    display: block
  }
</style>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

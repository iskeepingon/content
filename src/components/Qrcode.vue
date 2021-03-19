<template>
  <div class="qrcode" :style="{top: top + 'px'}">
    <img src="https://static.qiushibaike.com/images/web_v3/sidebar/qrcode_banner.png?v=14387788b9eb2f53bc951e7a3bb1f939">
  </div>
</template>

<script>
export default {
  name: 'Qrcode',
  props: {
    top: {
      type: Number,
      default: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .qrcode {
    width: 340px;
    background-color: #f4f5f6;
    &.fixed {
      position: fixed;
      top: 0;
    }
    img {
      width: 308px;
      height: 449px;
      margin: 16px;
    }
  }
</style>

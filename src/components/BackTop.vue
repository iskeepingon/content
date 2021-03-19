<template>
  <div class="back-top">
    <a class="back-top-backtop" href="#" rel="nofollow">
      <span class="back-top-backtop-icon"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .back-top {
    position: fixed;
    z-index: 1001;
    bottom: 70px;
    right: 18px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    .back-top-backtop {
      display: block;
      padding: 12px;
      background: rgba(255, 255, 255, .5);
    }
    .back-top-backtop-icon {
      display: block;
      width: 24px;
      height: 24px;
      background: transparent url(https://static.qiushibaike.com/images/v2/backtop.png?v=2019-2-15-1945) no-repeat scroll left center;
    }
  }
</style>

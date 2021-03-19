<template>
  <div class="item clearfix">
    <div class="item-img"><router-link to="/detail"><img src=""></router-link></div>
    <div class="item-content">
      <router-link class="item-p" to="/detail">网友：打清早去田里，居然有两只土拨鼠在晨练太极</router-link>
      <div class="clearfix">
        <div class="item-num">
          <span>5&nbsp;&nbsp;好笑</span>
          <span>6&nbsp;&nbsp;评论</span>
        </div>
        <div class="item-author">
          <img src="">
          <span>xxxx</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    data: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .item {
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 0;

    &:last-child {
      border-bottom: 0;
    }
    .item-img {
      position: relative;
      float: left;
      margin-right: 16px;
      img {
        vertical-align: top;
        margin-left: 1px;
        width: 150px;
        height: 112px;
        display: inline-block;
        object-fit: cover;
        position: relative;
        z-index: 2;
        box-shadow: 0 0 1px #e8e8e8;
      }
    }
    .item-content {
      float: left;
      position: relative;
      width: 438px;
      .item-p {
        font-size: 20px;
        color: #191919;
        font-weight: 700;
        line-height: 30px;
        height: 60px;
        width: 438px;
        overflow: hidden;
        margin-bottom: 16px;
        padding-top: 8px;
        display: block;
        &:hover {
          color: #eb6250;
        }
      }
      .item-num {
        float: left;
        span {
          font-size: 14px;
          color: #999;
          line-height: 24px;
          margin-right: 5px;
        }
      }
      .item-author {
        float: right;
        img {
          height: 18px;
          width: 18px;
          margin-right: 6px;
          border-radius: 50%;
          vertical-align: middle;
        }
        span {
          font-size: 14px;
          color: #999;
          line-height: 24px;
          width: 71px;
          height: 24px;
          overflow: hidden;
          vertical-align: middle;
          display: inline-block;
        }
      }
    }
  }
</style>

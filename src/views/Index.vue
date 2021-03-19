<template>
  <div class="index clearfix">
    <div class="nav-wrap">
      <div class="nav">
        <router-link to="/" class="logo"><img src="https://static.qiushibaike.com/images/web/v4/index_logo.png?v=2019-2-15-1945"/></router-link>
        <div class="menu">
          <a href="javascript:void(0);" @click="setCurr(0)" :class="{'active':curr===0}">推荐</a>
          <a href="javascript:void(0);" @click="setCurr(1)" :class="{'active':curr===1}">段子</a>
        </div>
      </div>
    </div>
    <div class="list-wrap">
      <ItemC v-for="(item,index) in listData" :key="index" :data="item"></ItemC>
    </div>
    <div class="qrcode-wrap">
      <QrcodeC></QrcodeC>
    </div>
  </div>
</template>

<script>
import ItemC from '../components/Item'
import QrcodeC from '../components/Qrcode'
export default {
  name: 'Index',
  data() {
    return  {
      curr: 0,
      msg: 'String',
      listData: []
    }
  },
  components: {
    ItemC,
    QrcodeC
  },
  mounted() {
    this.getListData()
    this.initCurr()
  },
  methods: {
    initCurr() {
      this.curr = +(localStorage.getItem('indexPageCurr') || 0)
    },
    setCurr(curr) {
      localStorage.setItem('indexPageCurr', curr)
      this.curr = curr
    },
    getListData() {
      let arr = [[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{},{},{},{},{}]]
      this.listData = arr[this.curr]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;

  .nav-wrap {
    width: 188px;
    float: left;
    height: 189px;
    .nav {
      padding-top: 16px;
      width: 188px;
      position: fixed;
      top: 0;
      &.no-fixed {
        position: static;
      }
      .logo {
        display: block;
        height: 46px;
        width: 135px;
        margin: 0 auto 17px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .menu {
        a {
          width: 135px;
          height: 45px;
          line-height: 45px;
          font-size: 18px;
          color: #7a4624;
          text-align: center;
          background: #fff;
          display: block;
          cursor: pointer;
          border-radius: 8px;
          margin: 0 auto 10px;
          &:hover, &.active {
            background: #fcc917;
            font-weight: 700;
          }
        }
      }
    }
  }

  .list-wrap {
    width: 608px;
    float: left;
    margin: 6px 16px 16px 16px;
    padding: 0 16px 0;
    position: relative;
    background-color: #fff;
  }

  .qrcode-wrap {
    width: 340px;
    height: 481px;
    float: right;
    margin-top: 16px;
  }

}
</style>

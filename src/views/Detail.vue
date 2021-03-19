<template>
  <div class="detail">
    <div class="header-wrap">
      <div class="header">
        <router-link to="/" class="logo"><img src="https://static.qiushibaike.com/images/web/v4/logo@2x.png?v=2019-2-15-1945"/> </router-link>
        <div class="menu">
          <a href="javascript:void(0);" @click="setCurr(0)" :class="{'active':curr===0}">推荐</a>
          <a href="javascript:void(0);" @click="setCurr(1)" :class="{'active':curr===1}">段子</a>
        </div>
      </div>
    </div>
    <div class="wrap clearfix">
      <div class="author">
        <div class="avar">
          <img src="https://pic.qiushibaike.com/system/avtnew/3924/39245649/thumb/20210218062757.jpg"/>
          <span>Arale...</span>
        </div>
        <div class="info clearfix">
          <div class="info-item">
            <h3>1W</h3>
            <p>好笑</p>
          </div>
          <div class="info-item">
            <h3>97</h3>
            <p>糗事</p>
          </div>
          <div class="info-item">
            <h3>28</h3>
            <p>粉丝</p>
          </div>
        </div>
      </div>
      <div class="article">
        <h1>Arale大方脸的糗事：盘点那些怼人不带脏字儿的爽句文明社会，从你我做起</h1>
        <div class="date">2021-03-12 15:32&nbsp;好笑数：364</div>
        <div class="article-content">
          <p>盘点那些怼人不带脏字儿的爽句文明社会，从你我做起</p>
          <div class="img">
            <img src=""/>
          </div>
        </div>
      </div>
      <div class="qrcode-wrap">
        <QrcodeC top="64"></QrcodeC>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeC from '../components/Qrcode'
export default {
  name: 'Detail',
  data() {
    return  {
      msg: 'String',
      listData: [
        {},
        {},
        {},
        {}
      ]
    }
  },
  components: {
    QrcodeC
  },
  methods: {
    setCurr(curr) {
      localStorage.setItem('indexPageCurr', curr)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .detail {
    .header-wrap {
      height: 48px;
      width: 100%;
      background: rgb(255, 214, 0);
      .header {
        margin: 0 auto;
        width: 1200px;
        min-width: 1200px;
        height: 48px;
        position: relative;
        background: #ffd600;
        .logo {
          display: block;
          margin-top: 5px;
          height: 38px;
          width: 98px;
          float: left;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .menu {
          float: left;
          margin: 0 40px;

          a {
            float: left;
            margin-right: 1px;
            padding: 0 30px;
            text-align: center;
            line-height: 48px;
            display: block;
            font-size: 16px;
            color: #222;
            height: 44px;
            border-bottom: 4px solid #ffd600;

            &:hover {
              border-bottom-color: #ffe36f;
              background: #ffe36f;
            }
          }
        }
      }
    }
    .wrap {
      width: 1200px;
      min-width: 1200px;
      margin: 0 auto;
      .author {
        float: left;
        position: static;
        width: 186px;
        font-size: 12px;
        margin-top: 46px;
        border: 1px solid #e6e6e6;
        padding: 30px 0 22px;
        .avar {
          position: relative;
          padding-top: 30px;
          img {
            position: absolute;
            top: -60px;
            left: 64px;
            width: 60px;
            height: 60px;
            display: block;
            border-radius: 30px;
          }
          span {
            display: block;
            text-align: center;
            font-weight: 700;
            margin: -20px auto 26px;
            max-width: 110px;
            font-size: 18px;
            color: #ff7845;
            line-height: 20px;
            vertical-align: middle;
          }
        }
        .info {
          .info-item {
            float: left;
            width: 33%;
            height: 25px;
            text-align: center;
            h3 {
              font-size: 16px;
              color: #191919;
              text-align: center;
              line-height: 20px;
              margin-top: -8px;
              font-weight: 700;
            }
            p {
              font-size: 12px;
              color: #999;
              text-align: center;
              line-height: 22px;
            }
          }
        }
      }
      .article {
        width: 608px;
        float: left;
        margin: 16px 16px 16px 16px;
        padding: 0 16px 0;
        position: relative;
        background-color: #fff;
        .date {
          font-size: 14px;
          color: #999;
          margin: 0 0 0;
          position: relative;

        }
        h1 {
          font-size: 28px;
          color: #333;
          line-height: 34px;
          font-weight: 700;
          margin: 4px 0 16px;
          width: 100%;
          max-height: 68px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
          word-break: break-all;
        }
        .article-content {
          background-color: #fff;
          clear: both;
          padding: 16px 0 0;
          p {
            font-size: 18px;
            line-height: 32px;
            word-wrap: break-word;
            color: #191919;
          }
          .img {
            margin: 16px 0 0;
            img {
              width: 100%;
              margin-bottom: 16px;
              display: block;
            }
          }
        }
      }
      .qrcode-wrap {
        width: 340px;
        height: 481px;
        float: right;
        margin-top: 16px;
      }
    }
  }
</style>

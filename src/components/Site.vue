<template>
  <div class="site">
    <div class="copyrights">
      <p><a style="color:#333" href="https://beian.miit.gov.cn">互联网ICP备案：京ICP备14028348号-1</a></p>
      <p>
        <span>广播电视节目制作经营许可证：（京）字第08319号</span>
        <span>网络文化经营许可证：
            <img src="//static.qiushibaike.com/images/wenhuajingying.png?v=f5f3976cf4be787ad2be202a19d40823" style="width: 20px; height: 20px; vertical-align: top;">京网文[2020]0625-100号
          </span>
      </p>
      <p>增值电信业务经营许可证：京ICP证140448号</p>
      <!-- <p style="margin-top: 8px"><span>营业性演出许可证：京演(机构)(2018)1940号</span></p> -->
      <p>
        <span>计算机信息网络国际联网单位备案：<a style="color:#333" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502031601" rel="nofollow"><img style="vertical-align: top;" src="//static.qiushibaike.com/images/beian.png?v=d0289dc0a46fc5b15b3363ffa78cf6c7">京公网安备11010502031601号</a></span>
      </p>
      <br>
      <p>
        <a style="color:#333" href="https://www.12377.cn/">网上有害信息举报专区</a>
      </p>
      <p>
        <span>违法和不良信息举报电话：18126520579</span>
        <span>邮箱：kefu@qiushibaike.com</span>
      </p>
      <br>
      <p>
        友际无限（北京）科技有限公司
      </p>
      <p>
        <span>© Qiushibaike.com 糗事百科版权所有</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Site'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .site {
    .copyrights {
      background-color: #ffffff;
      width: 960px;
      padding: 20px 0;
      margin: 0 auto;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      border-top: 1px solid #efefef;
      p {
        padding: 5px 0;
        display: inline-block;
        vertical-align: top;
        a, span {
          padding: 0 4px;
        }
      }
    }
  }
</style>

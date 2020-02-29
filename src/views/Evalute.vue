<template>
  <!-- <div class="evalute-top">
    <Card>
      <div class="evalute-top-left">1</div>
      <div class="evalute-top-right">2</div>
    </Card>
  </div>-->
  <div>
      <!-- 顶部卡片 -->
    <Card style="width:100%">
      <div class="evalute-top">
        <div class="evalute-top-left">
          <h3>{{data[0].score}}</h3>
          <span>综合评分</span>
          <p>高于周边商家69.2%</p>
        </div>
        <div class="evalute-top-right">
          <p>服务态度</p>
          <p>服务态度</p>
          <p><span>送达时间</span> {{data[0].deliveryTime}}分钟</p>
        </div>
      </div>
    </Card>

    <div class="evalute-center">
        <!-- 三个按钮 -->
        <div class="center-buttom">
            <Button :size="buttonSize" type="primary">全部 {{data[0].rateType}} </Button>
            <Button :size="buttonSize" type="default">满意</Button>
            <Button :size="buttonSize" type="default">不满意</Button>
        </div>
        <!-- 隔行 -->
        <div class="evalute-center-p">
            <Icon type="ios-arrow-dropdown" /><span>只看有内容给的评价</span>
            
        </div>
    </div>

  </div>
</template>

<script>
import { getevaluate } from "../api/axios";
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getevaluate().then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.evalute-top {
  display: flex;
  justify-content: space-around;
  .evalute-top-left {
    h3 {
      color: red;
      font-size: 25px;
    }
    text-align: center;
  }
}
.evalute-center{
    height: 500px;
    background-color: #cccccc;
    overflow: hidden;
    .center-buttom{
        height: 15%;
        width: 100%;
        margin-top: 20px;
        background-color: #ffffff;
        button{
        margin-left: 20px;
        margin-top: 20px;
        }
    }
    .evalute-center-p{
        height: 7%;
        width: 100%;
        background-color: #ffffff;
        line-height: 35px;
        .ivu-icon-ios-arrow-dropdown{
                font-size: 22px;
                background-color: #cccccc;
                border-radius: 50%;
                border: none;
        }
        color: #9EA1A8;
    }
}
</style>
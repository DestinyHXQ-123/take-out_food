<template>
  <div>
    <!-- 容器页面 -->
    <!-- 头部 -->
    <div class="Index-header" :style="{backgroundImage:'url(' + data.avatar + ')',backgroundRepeat:'no-repeat',backgroundSize:'cover'}">
      <!-- 联调后台 -->
      <div class="Index-header-top" >
        <div class="header-left">
          <img :src="data.avatar" />
        </div>
        <div class="header-right">
          <h3>{{data.name}}</h3>
          <span>{{data.description}}</span>/
          <span>30分钟内送达</span>
          <p>{{data.supports[0].description}}</p>
        </div>
      </div>
      <div class="Index-header-btommo">
        <button>公告</button>
        <span>{{data.bulletin}}</span>
      </div>
    </div>
    <div class="router-link-div">
      <router-link to="/goods">商品</router-link>
      <router-link to="/evalute">评价</router-link>
      <router-link to="/merchant">商家</router-link>
    </div>

    <router-view></router-view>

    <div class="Index-showcar">
      <div class="showcar-one">
        <Icon type="md-cart"/>
        <span class="one-span">$0</span>
        <span class="one-span-one">|</span>
      </div>
      <div class="showcar-two">
        <span>另需要配送费:</span>
      </div>
      <div class="showcar-three">
        <Button type="text" ghost>$20起送</Button>

      </div>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/axios";
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getSeller().then(res => {
      // 渲染到视图

      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.Index-header {
  width: 100%;
  height: 130px;
  overflow: hidden;
  color: #ffffff;
  // filter:blur(1px);
  .Index-header-top {
    margin: auto;
    width: 90%;
    margin-top: 10px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    background: url("../assets/imgs/brand@2x.png") no-repeat 140px 3px;
    background-size: 30px;
    .header-left {
      img {
        width: 80px;
      }
    }
    .header-right {
      h3 {
        text-indent: 45px;
      }
      background: url("../assets/imgs/decrease_1@2x.png") no-repeat 0px 45px;
      background-size: 18px;
      p {
        text-indent: 20px;
      }
    }
  }
  .Index-header-btommo {
    background-color: rgb(72, 65, 59);
    padding: 6px 15px;
    margin-top: 20px;
    button {
      width: 40px;
      background: #ffffff;
      border: none;
      font-weight: bold;
    }
    span {
      overflow: hidden;
      color: #ffffff;
    }
  }
}
.router-link-div {
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  font-weight: bold;
}
.Index-showcar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #141c27;
  .showcar-one{
    .ivu-icon-md-cart{
      width: 50px;
      height: 50px;
      line-height: 50px;
      float: left;
      margin-left: 40px;
      position: relative;
      border: 3px solid #141c27;
      top: -10px;
      font-size: 35px;
      border-radius: 50%;
      background-color: #2B343D;
    }
    .one-span{
      line-height: 60px;
      font-size: 18px;
      font-weight: bold;
      color: #919296;
      padding: 20px;
    }
    .one-span-one{
      font-size: 30px;
    }
  }
  .showcar-two{
    span{
      font-size: 16px;
      color: #6D7379;
      line-height: 60px;
    }
  }
  .showcar-three{
    height: 60px;
    line-height: 60px;
    background-color: #2B343B;
    color: #999B9C;
    width: 100px;
    text-align: center;
  }
}
</style>
<template>
  <div class="goods-div">
    <div class="left-div">
      <!-- //想要实现betterscroll,必须套用ul -->
      <ul class="countent">
        <div @click="clickLeftTitle(index)" :class="{leftList:true, divSeater : index == curSelected}" v-for="(item,index) in data" :key="item.name">
          <img style="width:12px;" v-show="item.type ==1" src="../assets/imgs/decrease_1@2x.png" alt />
          <img style="width:12px;" v-show="item.type ==2" src="../assets/imgs/discount_1@2x.png" alt />
          <img style="width:12px;" v-show="item.type ==-1" src="../assets/imgs/special_1@2x.png" alt />
          {{ item.name }}
        </div>
      </ul>
    </div>
    <!-- 热销榜 -->
    <div class="right-div">
      <ul class="countent">
        <div :id="index" v-for="(item,index) in data" :key="item.id">
          <!-- 标题 -->
          <h5>{{ item.name }}</h5>
          <div v-for="child in item.foods" :key="child.id" class="foods-list-div">
            <div class="list-div-left">
              <img :src="child.icon" alt />
            </div>
            <div class="list-div-right">
              <label for>{{child.name}}</label>
              <p>{{child.description}}</p>
              <span>月销售: {{child.sellCount}}</span>
              <span>好评率: {{child.rating}}</span>
              <br />
              <p>
                <span class="red-span">$ {{child.price}} </span>
                <span class="del-span">${{child.oldPrice}}</span>
                <Button type="primary" shape="circle" icon="md-add"></Button>
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { Commodity } from "../api/axios";
import BScroll from 'better-scroll'


export default {
  data() {
    return {
      data: [],
      curSelected:0,
    };
  },
  created() {
    Commodity().then(res => {
      console.log(res.data);
      this.data = res.data.data;
    });
  },
  mounted(){
    new BScroll(document.querySelector('.left-div'),{
      click:true//允许容器点击
    });//左
    this.rightDiv = new BScroll(document.querySelector('.right-div'));//右
    
  },
  methods:{
    clickLeftTitle(index){
      this.curSelected = index;


      this.rightDiv.scrollToElement(document.getElementById(index),600);
    }
  }
};
</script>

<style lang="less" scoped>
.divSeater{
  background-color: #ffffff;
}
.goods-div {
  display: flex;
  height: 700px;
  .left-div {
    width: 80px;
    background-color: #f4f5f7;
    height: 100%;
    overflow: auto;
    .leftList {
      height: 60px;
      margin: 0 8px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #cccccc;
    }
  }
  .right-div {
    width: 100%;
    overflow: scroll;
    flex: 1;
    h5 {
      height: 30px;
      line-height: 30px;
      background-color: #f4f5f7;
      color: #9ea3a7;
      text-indent: 10px;
    }
    .foods-list-div {
      display: flex;
      justify-content: space-around;
      img {
        width: 100px;
        height: 70px;
      }
      .list-div-right {
        button {
          float: right;
          font-size: 17px;
          width: 25px;
          height: 25px;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 170px;
        }
        .red-span {
          color: red;
          font-weight: bold;
        }
        .del-span{
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
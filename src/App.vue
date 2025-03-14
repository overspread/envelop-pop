<template>
  <div id="app">
    <div class="shadow" v-if="showEnvelope">
      <div class="envelop" :class="{'open': openedEnvelope}">
        <div class="top">
          <div class="invitation"></div>
        </div>
        <div class="front"></div>
        <div class="paper">
          <div class="head-left">
            <p class="title">尊敬的凡且匠用户:</p>
            <p class="text-indent">您好！</p>
            <p class="time text-indent">
              自2019年至今，凡且匠系列产品之三甲E测、凌辰扶摇等考试培训系统已经陪伴大家走过了近5年。在此期间，
              <span class="hot">平台医院总数由十几家迅速突破近五百家，平台护士人数超3万人，考试总场次接近一万场</span>
              。大家对我们所提供每一项服务的每一次使用，都是对我们最大的认可！
            </p>
            <p class="desc text-indent">同时，一直以来的免费供应，也让平台承受了很大压力！为了接下来还能更好、更持久的服务大家，为大家源源不断地提供切实刚需的有用的产品，迫于团队壮大及服务扩充的需要，<span class="hot">
              自2024年4月23日起，平台不得不对外开始成本的分摊收费。
            </span>希望能得到大家的支持与理解！</p>
            <p class="text-indent">
              详细收费细则请与以下人员联系：
            </p>
            <p class="text-indent1">翁丽花：18621967545</p>
            <p class="text-indent1">赵亚：17896030201</p>
            <p class="text-indent">再次感谢大家的理解与信任！</p>
            <p style="text-align: right;">杭州向尊科技有限公司</p>
            <p style="text-align: right;">2024年4月23日</p>
          </div>
        </div>
        <div class="bottom">
          <div class="logo"></div>
        </div>
        <div class="goon" @click="showEnvelope = false">随便看看</div>
        <div class="btn" @click="openEnvelop">
          <img :src="require('./assets/seal-word.png')">
        </div>
        <div class="left flower"></div>
        <div class="right flower"></div>
        
      </div>
      <div class="count-down" v-if="openedEnvelope">
        <div class="clear-time-know" v-show="showKnow">我已知晓</div>
        <div class="clear-time-no" v-show="!showKnow">（{{countdown}}s） 我已知晓</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data () {
    return {
      openedEnvelope: false,
      showEnvelope: true,
      countdown:3,
      showKnow:false,
    }
  },
  methods: {
    openEnvelop () {
      this.openedEnvelope = true
      this.downTime()
    },
    //倒计时
    downTime(){
      this.loading();  //启动定时器
      this.timer = setInterval(() =>{
            //创建定时器
          if(this.countdown === 0){
            this.clearTimer();  //关闭定时器
            this.showKnow = true
            console.log(this.showKnow)
          }else{
              this.loading();
          }
      },1000);
    },
    loading(){
      //启动定时器
      this.countdown--;  //定时器减1
    },
    clearTimer(){
      //清除定时器
      clearInterval(this.timer);
      this.timer = null;
    },
  }
}
</script>

<style lang="scss">
.text-indent{
  text-indent: 2em;
}
.text-indent1{
  text-indent: 3em;
}
html, body{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content{
  padding: 40px 30px;
  ol{
    margin-left: 40px;
    opacity: 0;
    &.show{
      opacity: 100;
      transition: opacity 1.5s;
    }
  }
}
*, *::before, *::after {
    box-sizing: inherit;
    padding: 0px;
    margin: 0px;
}
@keyframes Falling {
  0% {
    opacity: 1;
    transform: translateY(-120px);
  }
  100% {
    opacity: 1;
    transform: translateY(240px);
  }
  
}
@keyframes centerDown {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    transform: translateY(80px);
    opacity: 0;
  }
  
}
@keyframes centerUp {
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
  
}
@keyframes Rotate {
  0% {
    opacity: 1;
    transform: rotate(0)
  }
  100% {
    opacity: 1;
    transform: rotate(180deg)
  }
}

.shadow{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background:rgba(16, 23, 36, 0.64);
  z-index: 5000;
  .envelop{
    width: 864px;
    height: 406px;
    /* background: #212865 url('./assets/envelop-back.png') no-repeat; */
    background: #212865 url('http://img-ys011.didistatic.com/static/dc2img/envelop-back.png') no-repeat;
    background-size: 864px 406px;
    position: absolute;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    margin-left: -432px;
    margin-top: -300px;
    z-index: 5001;
    
    .front{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 864px;
      height: 406px;
      /* background: url('./assets/envelop-front.png') no-repeat; */
      background: url('http://img-ys011.didistatic.com/static/dc2img/envelop-front.png') no-repeat;
      background-size: 864px 406px;
      z-index: 5003;
      border-radius: 0px 0px 4px 4px;
    }
    .paper{
      position: absolute;
      top: 15px;
      left: 40px;
      width: 784px;
      height: 390px;
      background-color: #fff;
      /* background: url('./assets/envelop-paper.png') no-repeat; */
      background-size: 784px 492px;
      z-index: 5002;
      padding: 30px 40px;
      overflow: hidden;
      visibility: hidden;
      .head-left{
        width: 100%;
        margin-bottom: 24px;
        .time{
          margin-bottom: 0px;
        }
        .desc{
          width: 100%;
        }
      }
    }
    .top{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 864px;
      height: 293px;
      /* background: url('./assets/envelop-top.png') no-repeat; */
      background: url('http://img-ys011.didistatic.com/static/dc2img/envelop-top.png') no-repeat;
      background-size: 864px 293px;
      z-index: 5005;
      display: flex;
      padding-top: 92px;
      justify-content: center;

      .invitation{
        width: 119px;
        height: 39px;
        background: url('./assets/image.png') no-repeat;
        background-size: 119px 39px;
      }
    }
    .bottom{
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 864px;
      height: 249px;
      /* background: url('./assets/envelop-bottom.png') no-repeat; */
      background: url('http://img-ys011.didistatic.com/static/dc2img/envelop-bottom.png') no-repeat;
      background-size: 864px 249px;
      z-index: 5004;
      display: flex;
      padding-top: 190px;
      justify-content: center;
      border-radius: 0px 0px 4px 4px;

      .logo{
        width: 99px;
        height: 33px;
       /* background: url('./assets/envelop-logo.png') no-repeat; */
        background-size: 99px 33px;
      }
      
    }
    .goon{
        position: absolute;
        left: 50%;
        bottom: 70px;
        opacity: 0%;
        transform: translateX(-50%);
        border: 1px solid #fff;
        border-radius: 2px;
        padding: 5px 16px;
        color: #fff;
        font-family: PingFangSC-Medium;
        font-size: 12px;
        line-height: 20px;
        height: 30px;
        z-index: 5007;
      }
    .btn{
      position: absolute;
      top: 200px;
      left: 50%;
      margin-left: -53px;
      width: 107px;
      height: 105px;
      background: url('./assets/seal.png') no-repeat;
      background-size: 107px 105px;
      z-index: 5006;
      cursor: pointer;
      &:hover{
        img{
          opacity: 100;
          transition: opacity 0.5s;
        }
      }
      img{
        opacity: 0;
        width:107px; 
        height: 105px;
      }
    }
    .flower{
      position: absolute;
      bottom: -13px;
      width: 216px;
      height: 48px;
      background: url('./assets/silk.png') no-repeat;
      background-size: 216px 48px;
      z-index: 5007;
      &.right{
        right: -40px;
      }
      &.left{
        width: 40px;
        left: -40px;
      }
      
    }
    &.open{
      margin-top: -100px;
      transition: margin-top 0.5s ease 0.5s;
      border-radius: 0px 0px 4px 4px;
      .btn{
        top: 170px;
        opacity: 0;
        z-index: 5001;
        transition: top 0.5s, opacity 0.2s ease 1s, z-index 0.2s ease 1s;
        img{
          opacity: 100;
          transition: opacity 0.5s;
        }
      }
      .bottom{
        .logo{
          opacity: 0;
          transition: opacity 0.2s ease 1s;
        }
        
        transform-origin: center bottom; 
        transform: rotateX(50deg);
        transition: transform 0.3s ease 1.5s;
      }
      .goon{
          opacity: 100;
          transition: opacity 0.3s ease 1.7s;
        }
      .top{
        z-index: 5001;
        .invitation{
          opacity: 0;
          transition: opacity 0.2s ease 1s;
        }
        transform-origin: center top; 
        transform: rotateX(180deg);
        transition: transform 0.5s ease 1.3s, z-index 0.1s ease 1.5s;
      }
      .front{
        height: 197px;
        top: 210px;
        transition: all 0.5s ease 1.3s;
      }
      .paper{
        top: -215px;
        height: 492px;
        transition: top 0.5s ease 2s, height 0.5s ease 2s;
        visibility: visible;
      }
    }
  }
  .count-down{
    position: absolute;
    left: 45%;
    bottom:5px;
    font-size: 14px;
    color: #fff;
    .clear-time-know{
      padding:10px 20px;
      border-radius:20px;
      background-color: #2c3677;
      text-align: center;
    }
    .clear-time-no{
      padding:10px 20px;
      border-radius: 20px;
      text-align: center;
      background-color: #101724;
    }
  }
}

.head {
    padding: 24px 44px 24px 20px;
    width: 100%;
    height: 302px;
    background: #ECF0F5;
    border-radius: 2px;
    display: flex;
    margin-bottom: 16px;
    &-left {
      width: 380px;
      p {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #303A51;
        text-align: justify;
        line-height: 20px;
        &.title {
          font-family: PingFangSC-Semibold;
          font-size: 14px;
          color: #101724;
          line-height: 22px;
        }
        &.desc {
          width: 260px;
        }
        &.time {
          margin: 12px 0;
          span {
            font-family: DINAlternate-Bold;
            font-size: 12px;
          }
        }
        &.thank {
          margin: 8px 0 32px;
        }
        &.amount {
          font-family: PingFangSC-Semibold;
          font-size: 14px;
          color: #101724;
          line-height: 22px;
          span {
            display: inline-block;
            margin: 8px 0;
            font-family: DINAlternate-Bold;
            font-size: 28px;
          }
        }
        &.title .hot {
          font-size: 20px;
        }
        &.split {
          margin: 0 4px;
          width: 2px;
          height: 14px;
          display: inline0-block;
          background: #E3E6EC;
        }
        .hot {
          color: #ef645c;
        }
      }
      .tip {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #505568;
        line-height: 20px;
      }
      .operate {
        margin-top: 32px;
        display: flex;
        align-items: center;
        .button {
          width: 100px;
          margin-right: 16px;
        }
      }
    }
    &-content {
      flex: 1;
      display: flex;
      justify-content: space-between;
      &-item {
        flex: 1;
        min-width: 208px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .item {
          &-logo {
            position: relative;
            width: 160px;
            height: 134px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 80px 80px 0 0;
            overflow: hidden;
            .title {
              display: inline-block;
              position: absolute;
              top: 12px;
              font-family: PingFangSC-Medium;
              font-size: 12px;
              text-align: justify;
            }
            &-gold {
              display: inline-block;
              width: 200px;
              height: 123px;
              top: 0;
              left: -20px;
              position: absolute;
              opacity: 0;
              animation: Falling 1.5s linear .8s 1;
              z-index: 2;
            }
            &-envoy {
              color: #8493AB;
              background-image: linear-gradient(180deg, rgba(191,208,235,0.50) 0%, rgba(191,208,235,0.00) 80%, transparent);
            }
            &-clue {
              color: #B79675;
              background-image: linear-gradient(180deg, rgba(243,227,210,0.50) 0%, rgba(241,221,200,0.00) 80%, transparent);
            }
            &-ai {
              color: #BD9145;
              background-image: linear-gradient(180deg, rgba(255,239,186,0.50) 0%, rgba(237,226,188,0.00) 80%, transparent);
            }
            &-center {
              position: absolute;
              width: 160px;
              height: 134px;
              z-index: 3;
              &-up-active {
                opacity: 0;
                animation: centerUp 1s ease-out 0.5s 1;
                z-index: 5;
              }
              &-down-active {
                opacity: 1;
                z-index: 4;
                animation: centerDown 1s ease 0.5s 1;
              }
              &-shadow {
                width: 80px;
                height: 80px;
                margin-bottom: -20px;
                background-image: linear-gradient(to bottom left, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.01) 50%); 
                border-radius: 50%;
                z-index: 6;
                opacity: 0;
                animation: Rotate 0.5s ease-in 1;
              }
            }
            &-bottom {
              position: absolute;
              bottom: 0;
              width: 120px;
              height: 19px;
              z-index: 4;
            }
          }
          &-desc {
            width: 208px;
            padding: 15px 0 24px;
            height: 90px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #303A51;
            text-align: justify;
            .link {
              color: #2F81F9;
              cursor: pointer;
            }
          }
          &-tip {
            height: 32px;
            padding: 15px 0 4px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #303A51;
            text-align: justify;
          }
          &-data {
            padding: 4px 0 15px;
            height: 58px;
            display: flex;
            align-items: center;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #303A51;
            .split {
              width: 2px;
              height: 14px;
              display: inline0-block;
              margin: 0 16px;
              background: #E3E6EC;
            }
            .item {
              text-align: center;
              .amount span {
                font-family: DINAlternate-Bold;
                font-size: 16px;
                color: #101724;
                letter-spacing: 0;
                text-align: center;
                line-height: 20px;
              } 
            }
          }
        }
        .submit-btn {
          width: 108px;
          height: 30px;
          font-size: 12px;
          &:target {
          border: 1px solid red;
        }
        }
        .more-btn {
          width: 108px;
          height: 30px;
          background: transparent;
        }
      }
    }
  }
</style>

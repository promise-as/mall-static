<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript;">小米商城</a>
          <a href="javascript;">MUI</a>
          <a href="javascript;">云服务</a>
          <a href="javascript;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username == ''" @click="login">登录</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="/#/product/31" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="">
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'nav-header',
  computed: {
    ...mapState(['username', 'cartCount'])
  },
  methods: {
    ...mapMutations(['saveUserName', 'saveCartCount']),
    login(){
      this.$router.push('/login');
    },
    goToCart(){
      this.$router.push('/cart');
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container{
      @include flex();
      a{
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart{
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        margin-right: 0;
        .icon-cart{
          @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header{
    .container{
      position: relative;
      height: 112px;
      @include flex();
      .header-menu{
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu{
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span{
            cursor: pointer;
          }
          &:hover{
            color: $colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px 0 rgba(0,0,0,0.11);
            z-index: 10;
            transition: all .5s;
            background-color: #fff;
            .product{
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a{
                display: inline-block;
              }
              img{
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img{
                height: 137px;
              }
              .pro-name{
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price{
                color: $colorA;
              }
              &::before{
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before{
                display: none;
              }
            }
          }
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input{
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a{
            @include bgImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>

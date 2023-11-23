<template>
  <div class="success-box">
    <div class="successImg">
      <img
        src="../assets/check-circle.png"
        alt=""
      >
    </div>
    <footer>
      <div class="top">
        <slot name="event"></slot>成功
      </div>
      <div class="bottom">
        <router-link
          to="/login"
          style="color:#0f6fde ;"
        >返回登录</router-link>
      </div>
    </footer>
    <div class="rightImg">
      <img
        src="../assets/trumpet.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
body {
  position: relative;
}
.success-box {
  position: absolute;
  width: 28.125rem;
  background-color: #fff;
  box-shadow: #525457 0px 0px 10px;
  // border: 2px solid #1c69ff;
  border-radius: 2rem;
  top: 7.5rem;
  left: 60rem;
  .successImg {
    padding: 50px 0 15px 120px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  footer {
    .top {
      color: #0f6fde;
      font-size: 32px;
      text-align: center;
    }
    .bottom {
      color: #0f6fde;
      text-decoration: underline;
      text-align: center;
      padding: 15px 0 250px 0;
    }
  }
  .rightImg {
    position: absolute;
    top: 298px;
    right: -50px;
    img {
      width: 185px;
      height: 300px;
    }
  }
}
</style>
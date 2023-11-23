<template>
  <div class="loginselect">
    <h3>请选择登录人员方式</h3>
    <div class="loginway-box">
      <div class="loginway">
        <img
          src="../assets/Avatar.png"
          alt=""
        >
        <div>业务人员</div>
      </div>
      <div class="loginway">
        <img
          src="../assets/Avatar 1.png"
          alt=""
        >
        <div>标注人员</div>
      </div>
    </div>
    <footer @click="toLogin">
      <van-button
        round
        type="info"
        style="width: 130px;"
        @click="toLogin"
      >确认</van-button>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin () {
      this.$router.push('/login/reGister')
    }
  }
}
</script>

<style lang="less" scoped>
body {
  position: relative;
  .loginselect {
    position: absolute;
    // top: 120px;
    // left: 960px;
    top: 7.5rem;
    left: 60rem;
    width: 18.75rem;
    border-radius: 1rem;
    background-color: #f7f9fc;
    border: 0.125rem solid #1c69ff;
    h3 {
      text-align: center;
      color: #1c69ff;
    }
    .loginway-box {
      display: flex;
      justify-content: space-around;
      .loginway {
        img {
          width: 5.625rem;
          height: 5.625rem;
        }
        div {
          color: #1c69ff;
          padding-left: 0.875rem;
          padding-bottom: 1.25rem;
        }
      }
    }
    footer {
      padding: 0.625rem 0 1.5625rem 5.3125rem;
    }
  }
}
</style>
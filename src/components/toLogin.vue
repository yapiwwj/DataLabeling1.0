<template>
  <div class="login-box">
    <header class="title">登录</header>
    <div class="checkbox">
      <div>请选择登录人员方式：</div>
      <van-radio-group
        v-model="radio"
        direction="horizontal"
      >
        <van-radio name="1">标注人员</van-radio>
        <van-radio name="2">业务人员</van-radio>
      </van-radio-group>
    </div>

    <div class="input">
      <input
        type="text"
        placeholder="邮箱"
      >
      <input
        type="password"
        placeholder="密码"
      >
    </div>
    <div class="button">
      <van-button
        style="width: 150px;"
        round
        type="primary"
        size="normal"
        color="#3B8EE0"
        @click="toWork"
      >登录</van-button>
    </div>
    <footer class="bottom">
      <!-- <div
        class="left"
        @click="torRegister"
      >创建账户</div> -->
      <div class="left">
        <router-link
          to="/login/reGister"
          style="color:#0f6fde ;"
        >创建账户</router-link>
      </div>
      <div class="right">
        <router-link
          to="/login/codeReset"
          style="color:#0f6fde;"
        >忘记密码</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  },
  methods: {
    toWork () {
      this.$router.push('/workbench')
    }
  }
}
</script>

<style lang="less" scoped>
body {
  position: relative;
}
.login-box {
  width: 28.125rem;
  background-color: #fff;
  position: absolute;
  box-shadow: #525457 0rem 0rem 0.625rem;
  // border: 2px solid #1c69ff;
  border-radius: 2rem;
  top: 7.5rem;
  left: 60rem;
  .title {
    color: #1c69ff;
    font-size: 1.625rem;
    padding: 1.5625rem 0 0 3.125rem;
  }
  .checkbox {
    padding: 0.625rem 0 0.625rem 2rem;
    div {
      padding: 0.625rem 0 0 1.25rem;
    }
  }
  .input {
    input {
      width: 18.75rem;
      padding: 0.3125rem 0 0.3125rem 1.875rem;
      margin: 1.25rem 0 1.25rem 3.125rem;
      border: 0.125rem solid #1c69ff;
      border-radius: 2rem;
    }
  }
  .button {
    padding: 1.25rem 0 1.875rem 9.0625rem;
  }
  .bottom {
    .left {
      float: left;
      text-decoration: underline;
      padding: 0.625rem 0 1.875rem 3.625rem;
    }
    .right {
      float: right;
      text-decoration: underline;
      padding: 0.625rem 3.625rem 1.875rem 0;
    }
  }
}
</style>
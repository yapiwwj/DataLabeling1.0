<template>
  <div class="register">
    <div class="title">
      <img
        src="../assets/letter.png"
        alt=""
      >
      请填写注册信息
    </div>
    <form
      action=""
      method="submit"
    >
      <div class="identity">
        <p>请选择身份</p>
        <van-radio-group
          v-model="radio"
          direction="horizontal"
          style="padding-left: 8.125rem;padding-bottom: 1rem;"
        >
          <van-radio name="1">标注人员</van-radio>
          <van-radio name="2">业务人员</van-radio>
        </van-radio-group>
      </div>
      <input
        type="text"
        placeholder="用户名"
      >
      <input
        type="text"
        placeholder="电子邮箱"
      >
      <input
        type="password"
        placeholder="密码"
      >
      <input
        type="password"
        placeholder="请再次输入密码"
      >
      <div class="to-register">
        <van-button
          type="primary"
          color="#3B8EE0"
          round
          style="width: 9.375rem;"
        >获取验证码</van-button>
      </div>
      <input
        type="text"
        placeholder="请输入验证码"
      >
      <div class="confirm">
        <van-button
          @click="toSuccess"
          type="primary"
          color="#3B8EE0"
          round
          style="width: 8.125rem;"
        >注册</van-button>
      </div>
    </form>
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
    toSuccess () {
      this.$router.push('/login/rgSuccess')
    }
  }
}
</script>

<style lang="less" scoped>
body {
  position: relative;
}
.register {
  width: 28.125rem;
  background-color: #fff;
  position: absolute;
  box-shadow: #525457 0px 0px 10px;
  // border: 2px solid #1c69ff;
  border-radius: 2rem;
  top: 7.5rem;
  left: 60rem;
  .title {
    font-size: 1.25rem;
    img {
      vertical-align: middle;
      padding: 1.875rem 1.875rem 1.25rem 6.25rem;
      width: 1.875rem;
      height: 1.875rem;
    }
  }
  form {
    .identity {
      p {
        text-align: center;
      }
    }
    input {
      width: 15.625rem;
      height: 1.5625rem;
      border-radius: 2rem;
      border: 0.125rem solid #1c69ff;
      margin: 0.625rem 0 0.625rem 5.9375rem;
      padding-left: 1.25rem;
    }
    .to-register {
      padding: 0.625rem 0 0.625rem 9.825rem;
    }
    .confirm {
      padding: 0.625rem 0 2.625rem 10.325rem;
    }
  }
}
</style>
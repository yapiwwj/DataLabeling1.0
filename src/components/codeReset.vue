<template>
  <div class="reset">
    <div class="title">
      <img
        src="../assets/letter.png"
        alt=""
      >
      重置密码
    </div>
    <form
      action=""
      method="submit"
    >
      <div v-show="isShow1">
        <input
          type="text"
          placeholder="请输入邮箱"
        >
      </div>
      <div class="askVertify">
        <van-button
          color="#3B8EE0"
          round
          style="width: 8.125rem;"
          type="primary"
          @click="ifShow2"
        >获取验证码</van-button>
      </div>
      <div v-show="isShow2">
        <input
          type="text"
          placeholder="输入验证码"
        >
        <div class="vertify">
          <van-button
            color="#3B8EE0"
            round
            style="width: 8.125rem;"
            type="primary"
            @click="ifShow3"
          >验证</van-button>
        </div>
      </div>

      <div v-show="isShow3">
        <input
          type="password"
          placeholder="请输入新密码"
        >
        <input
          type="password"
          placeholder="请确认新密码"
        >
        <div class="resetcode">
          <van-button
            color="#3B8EE0"
            round
            style="width: 8.125rem;"
            type="primary"
            @click="toSuccess"
          >重置</van-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow1: true,
      isShow2: false,
      isShow3: false
    }
  },
  methods: {
    ifShow2 () {
      this.isShow2 = true
    },
    ifShow3 () {
      this.isShow3 = true
    },
    toSuccess () {
      this.$router.push('/login/resetSuccess')
    }
  }
}
</script>

<style lang="less" scoped>
body {
  position: relative;
}
.reset {
  position: absolute;
  width: 28.125rem;
  background-color: #fff;
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
    input {
      width: 15.625rem;
      height: 1.5625rem;
      border-radius: 2rem;
      border: 0.125rem solid #1c69ff;
      margin: 0 0 0.625rem 5.9375rem;
      padding-left: 1.25rem;
    }
    .askVertify,
    .vertify,
    .resetcode {
      padding: 0.625rem 0 1.25rem 10rem;
    }
  }
}
</style>
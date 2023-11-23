<template>
  <div class="header">
    <div class="log">
      <img
        src="../assets/logo.png"
        alt=""
      >
      <p>Tagster</p>
    </div>
    <ul class="function">
      <li
        class="box"
        @click="toBench"
      >
        工作台
      </li>
      <li
        class="box"
        @click="toPublish"
      >
        发布
      </li>
      <li
        class="box"
        @click="toManage"
      >
        管理
      </li>
    </ul>
    <div
      class="user"
      @click="toCenter"
    >
      <van-icon
        name="user-circle-o"
        color="#fff"
        size="2rem"
      />
    </div>
    <div class="message">
      <van-icon
        name="envelop-o"
        color="#fff"
        size="2rem"
        dot
      />
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    toBench () {
      this.$router.push('/serve')
    },
    toPublish () {
      this.$router.push('/serve/puBlish')
    },
    toCenter () {
      this.$router.push('/usercenter/YwCenter')
    },
    toManage () {
      this.$router.push('/serve/perMission')
    }
  }
}

</script>

<style lang="less" scoped>
.header {
  height: 3.125rem;
  margin-left: 0.1875rem;
  background-color: #3977f1;
  border-radius: 1rem 1rem 0 0;
  .log {
    float: left;
    img {
      vertical-align: middle;
      width: 3.125rem;
      height: 3.125rem;
      padding-left: 1.25rem;
    }
    p {
      display: inline-block;
      font-size: 1.5rem;
      color: #fff;
      margin: 0 21.875rem 0 1.25rem;
    }
  }
  .function {
    float: left;
    li {
      cursor: pointer;
      display: inline-block;
      color: #fff;
      line-height: 3.125rem;
      padding: 0 1.875rem;
    }
    li:hover {
      background-color: #e9f0fe;
      color: #3977f1;
    }
  }
  .message,
  .user {
    cursor: pointer;
    float: right;
    padding: 0.625rem 1.25rem 0 0;
  }
}
</style>

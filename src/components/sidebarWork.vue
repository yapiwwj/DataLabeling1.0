<template>
  <div class="sideBar">
    <ul class="opetate">
      <div class="dangban"></div>
      <form action="/">
        <van-search
          v-model="value"
          background="#3977f1"
          shape="round"
          placeholder="请输入关键词"
        />
      </form>
      <li>
        <div class="box">
          <img
            class="img1"
            src="../assets/Shape8-white.png"
            alt=""
          >
          <span>项目文件</span>
        </div>
      </li>
      <li>
        <div class="box">
          <img
            class="img2"
            src="../assets/file-plus-white.png"
            alt=""
          >
          <span>新建</span>
        </div>
      </li>
      <li>
        <div class="box">
          <img
            class="img3"
            src="../assets/file-white.png"
            alt=""
          >
          <span>打开</span>
        </div>
      </li>
      <li>
        <div class="box">
          <img
            class="img4"
            src="../assets/save-white.png"
            alt=""
          >
          <span>保存</span>
        </div>
      </li>
      <li>
        <div class="box">
          <img
            class="img5"
            src="../assets/Shape-white.png"
            alt=""
          >
          <span>设置</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
body {
  position: relative;
}
.sideBar {
  position: absolute;
  // top: 5rem;
  // left: 2.1875rem;
  width: 10rem;
  // height: 40.625rem;
  height: 90%;
  margin-left: 0.1875rem;
  border-radius: 0 0 0 1rem;
  background-color: #3977f1;
  border: 0.125rem solid #0f6fde;
  border-right: 0;
  .opetate {
    .dangban {
      padding-top: 1.25rem;
    }
    li {
      // li:first-of-type {
      //   margin-top: .625rem;
      // }
      // padding: 0.5rem 0 0.625rem 1.25rem;
      .box {
        display: inline-block;
        padding: 0.625rem 1.25rem;
        img {
          vertical-align: middle;
          width: 1.25rem;
          height: 1.25rem;
        }
        span {
          color: #fff;
          padding-left: 0.625rem;
        }
      }
    }
    li:hover {
      background-color: #e9f0fe;
      span {
        color: #0f6fde;
      }
      .img1 {
        content: url(../assets/Shape8-blue.png);
      }
      .img2 {
        content: url(../assets/file-plus-blue.png);
      }
      .img3 {
        content: url(../assets/file-blue.png);
      }
      .img4 {
        content: url(../assets/save-blue.png);
      }
      .img5 {
        content: url(../assets/Shape-blue.png);
      }
    }
  }
}
</style>
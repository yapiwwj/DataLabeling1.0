<template>
  <div>
    <YWheaderNav></YWheaderNav>
    <sidebarWork></sidebarWork>
    <div class="all-bench">
      <header class="top">
        <div class="img-box"></div>
        <div
          class="img-box"
          @click="backImg"
          v-if="ImgList.length > 0"
        >
          <img
            class="img1"
            src="../../assets/back.png"
            alt=""
          >
          <span>返回</span>
        </div>

        <div
          class="img-box"
          @click="nextImg"
          v-if="ImgList.length > 0"
        >
          <img
            class="img4"
            src="../../assets/next.png"
            alt=""
          >
          <span>继续</span>
        </div>
      </header>
      <!-- 文件导入并显示 -->
      <div class="benchbox">
        <div
          class="bench"
          v-if="currentImage"
        >
          <img
            :src="currentImage.url"
            :alt="currentImage.name"
            style="width: 580px;height: 540px;"
          >

        </div>
        <input
          type="file"
          @change="getFiles"
          multiple
        >
        <van-button
          type="info"
          @click="showImg"
        >确认</van-button>
      </div>
      <!-- 样例 -->
      <div class="examplebox">
        <div class="example">
          <header>
            <h2>设置样例</h2>
          </header>
          <footer>
            <div class="example">
              <p class="title">标注样例</p>
              <div class="getExample">
                11
              </div>
            </div>
            <div class="example">
              <p class="title">#选区</p>
              <div class="getExample">
                11
              </div>
            </div>
          </footer>
        </div>

      </div>
      <!-- 人工操作 -->
      <div class="humanbox">
        <div class="human">
          <header>
            <h2>业务操作区</h2>
          </header>
          <footer class="button">
            <van-button
              type="info"
              round
              style="margin: .625rem ;padding: 0 2.5rem 0 2.5rem;"
            >标注</van-button>
            <van-button
              type="info"
              round
              style="margin: .625rem ;padding: 0 2.5rem 0 2.5rem;"
            >清除</van-button>

            <van-button
              type="info"
              round
              style="margin: .625rem ;padding: 0 2.5rem 0 2.5rem;"
            >撤回</van-button>
          </footer>
        </div>
      </div>
      <footer
        class="confirm"
        @click="backTag"
      >
        <p>
          <van-button
            type="info"
            round
            style="margin: .625rem ;padding: 0 2.5rem 0 2.5rem;background-color: #9dbff1;border-radius: 16px;"
          >分配</van-button>
        </p>
      </footer>
    </div>

  </div>
</template>

<script>
// import { getFiles } from '@/api/YwService/getFiles'
import { backTag } from '@/api/YwService/backTag'
import YWheaderNav from '@/components/YWheaderNav.vue'
import sidebarWork from '@/components/sidebarWork.vue'
export default {
  name: 'workBench',
  data () {
    return {
      files: '11',
      projectId: 2,
      projectName: 'slam1',
      tagValue: ['车辆', '墙壁', '行人'],
      // 上传图像文件列表
      ImgList: [],
      nextId: 1,
      currentIndex: -1 // 初始索引设置为-1，表示没有图片被选中
    }
  },
  computed: {
    currentImage () {
      console.log(this.ImgList)
      return this.ImgList[this.currentIndex]
    }
  },
  methods: {
    getFiles (event) {
      const files = Array.from(event.target.files)
      files.forEach(file => {
        const fileData = {
          id: this.nextId++,
          name: file.name,
          url: URL.createObjectURL(file) // 或者上传到服务器并获取URL
        }
        this.ImgList.push(fileData) // 将信息放入ImgList列表里
      })
    },
    // 显示图片
    showImg () {
      if (this.ImgList.length > 0) {
        this.currentIndex = 0 // 显示第一张图片
      }
      console.log(this.ImgList)
    },
    nextImg () {
      if (this.currentIndex < this.ImgList.length - 1) {
        this.currentIndex++ // 显示下一张图片
      }
    },
    backImg () {
      if (this.currentIndex > 0) {
        this.currentIndex-- // 显示上一张图片
      }
    },

    // 返回标签
    async backTag () {
      const res = JSON.stringify(await backTag(this.projectName, this.tagValue))
      console.log(res)
    }
  },
  components: {
    YWheaderNav,
    sidebarWork
  }
}
</script>

<style lang="less" scoped>
.all-bench {
  position: relative;
  width: 78%;
  // width: 82.5rem;
  // height: 40.625rem;
  height: 43.75rem;
  box-shadow: #525457 0rem 0rem 0.625rem;
  border-radius: 1rem;
  // border: 0.125rem solid #0f6fde;
  background-color: #fff;
  margin: 1.875rem 0 0 17.8125rem;
  .top {
    border-bottom: 0.125rem solid #0f6fde;
    display: flex;
    justify-content: flex-start;
    div {
      cursor: pointer;
      padding: 0.625rem 0.625rem;
      border-radius: 2rem;
      img {
        width: 1.5625rem;
        height: 1.5625rem;
        vertical-align: middle;
        margin: 0 0.3125rem 0 0;
      }
    }
    div:hover {
      background-color: #cce8ff;
      span {
        color: #0f6fde;
      }
      .img1 {
        content: url(../../assets/back-blue.png);
      }
      .img2 {
        content: url(../../assets/codesandbox-blue.png);
      }
      .img3 {
        content: url(../../assets/edit-2-blue.png);
      }
      .img4 {
        content: url(../../assets/next-blue.png);
      }
    }
  }
  .benchbox {
    position: absolute;
    top: 4.375rem;
    left: 3.125rem;
    width: 50%;
    height: 80%;
    border-radius: 1rem;
    border: 0.125rem solid #1c69ff;
    .bench {
      position: relative;
      height: 100%;
      text-align: center;
    }
  }
  .examplebox {
    position: absolute;
    top: 4.375rem;
    right: 2%;
    width: 40%;
    // height: 40%;
    border-radius: 1rem;
    border: 0.125rem solid #1c69ff;
    .example {
      header {
        padding: 0.625rem 0 0.125rem 0;
        padding-left: 2.5rem;
        h2 {
          width: 6.4rem;
          margin: 0.3125rem 0.3125rem;
          border-radius: 1rem;
          background-color: #9dbff1;
        }
      }
      .title {
        color: #3977f1;
        // font-size: 20px;
        font-weight: bold;
        padding-left: 1.875rem;
        margin: 0.625rem 1.25rem;
      }
      .getExample {
        width: 83%;
        padding: 0.625rem 0 0.625rem 1.25rem;
        margin-left: 2.8125rem;
        margin-bottom: 1.25rem;
        border: 2px solid #1c69ff;
        border-radius: 2rem;
      }
    }
  }
  .humanbox {
    position: absolute;
    top: 21.875rem;
    right: 2%;
    width: 40%;
    // height: 40%;
    border-radius: 1rem;
    border: 0.125rem solid #1c69ff;
    .human {
      header {
        padding: 0.625rem 0 0.9375rem 0;
        padding-left: 2.5rem;
        h2 {
          width: 7.8125rem;
          margin: 0.3125rem 0.3125rem;
          border-radius: 1rem;
          background-color: #9dbff1;
        }
      }
      footer {
        display: flex;
        justify-content: space-around;
      }
    }
  }
  .confirm {
    position: absolute;
    right: 17%;
    bottom: 6.125rem;
  }
}
</style>
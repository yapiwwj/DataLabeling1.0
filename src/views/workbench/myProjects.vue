<template>
  <div>
    <headerNav></headerNav>
    <sidebarWork></sidebarWork>
    <div class="workBench">
      <header class="top">
        <div class="img-box">
          <img
            class="img1"
            src="../../assets/file-plus.png"
            alt=""
          >
          <span>新建</span>
        </div>
        <div class="img-box">
          <img
            class="img2"
            src="../../assets/可见状态.png"
            alt=""
          >
          <span>切换视图</span>
        </div>
        <div class="img-box">
          <img
            class="img3"
            src="../../assets/repeat.png"
            alt=""
          >
          <span>排序</span>
        </div>
        <div class="img-box">
          <img
            class="img4"
            src="../../assets/trash-2.png"
            alt=""
          >
          <span>删除</span>
        </div>
        <!-- <view class="line"></view> -->
      </header>
      <table>
        <thead>
          <tr>
            <th class="projectName">项目名称</th>
            <th class="Statue">状态</th>
            <th class="createTime">创建时间</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="projectname">
              <div class="img">
                <img
                  src="../../assets/folder.png"
                  alt=""
                >
                <p>slam</p>
              </div>
            </td>
            <td class="statue">待定义</td>
            <td class="createtime">2023.11.10</td>
          </tr>
          <!-- 分割示意 -->
          <tr>
            <td class="projectname">
              <div class="img">
                <img
                  src="../../assets/folder.png"
                  alt=""
                >
                <p>slam2</p>
              </div>
            </td>
            <td class="statue">待标注</td>
            <td class="createtime">2023.11.11</td>
          </tr>
          <!-- 分割示意 -->
          <tr>
            <td class="projectname">
              <div class="img">
                <img
                  src="../../assets/folder.png"
                  alt=""
                >
                <p>slam2</p>
              </div>
            </td>
            <td class="statue">待标注</td>
            <td class="createtime">2023.11.11</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import headerNav from '@/components/headerNav.vue'
import sidebarWork from '@/components/sidebarWork.vue'
export default {
  name: 'myProjects',
  data () {
    return {
    }
  },
  methods: {

  },
  components: {
    headerNav,
    sidebarWork
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#E9F0FE')
  }
}
</script>

<style lang="less" scoped>
.workBench {
  width: 78%;
  // width: 82.5rem;
  // height: 40.625rem;高可由内容撑起来
  box-shadow: #525457 0rem 0rem 0.625rem;
  border-radius: 1rem;
  // border: 0.125rem solid #0f6fde;
  background-color: #fff;
  margin: 1.875rem 0 0 17.8125rem;
  .top {
    border-bottom: 0.125rem solid #0f6fde;
    display: flex;
    justify-content: flex-end;
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
        content: url(../../assets/file-plus-blue.png);
      }
      .img2 {
        content: url(../../assets/可见状态-blue.png);
      }
      .img3 {
        content: url(../../assets/repeat-blue.png);
      }
      .img4 {
        content: url(../../assets/trash-2-blue.png);
      }
    }
  }
  table {
    width: 100%;
    // thead {
    //   tr {
    //   }
    // }
    tbody {
      tr:nth-child(odd) {
        background-color: #cce8ff;
      }
      tr {
        td {
          border-radius: 0.625rem;
        }
        .projectname {
          .img {
            text-align: center;
            img {
              vertical-align: bottom;
              width: 3.125rem;
              height: 3.125rem;
            }
            p {
              color: #0f6fde;
              margin: 0 0;
            }
          }
        }
        .statue {
          text-align: center;
        }
        .createtime {
          text-align: center;
        }
      }
      // tr:hover {
      //   background-color: #cce8ff;
      // }
    }
  }
}
</style>

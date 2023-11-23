<template>
  <div>
    <YWheaderNav></YWheaderNav>
    <sidebarWork></sidebarWork>
    <div class="permissionBox">
      <header class="top">
        <van-search
          v-model="value"
          placeholder="查找标注文件..."
          shape="round"
          style="width: 90%;"
        />
        <img
          src="../../assets/edit 1.png"
          alt=""
          @click="edit()"
        >
      </header>
      <table>
        <thead>
          <th class="ProjectName">标注文件名</th>
          <th class="From">格式</th>
          <th class="Type">类型</th>
          <th class="Permissin">权限</th>
          <th class="CreateTime">创建时间</th>
          <th
            class="Delete"
            v-show=isShow
          >删除选择</th>
        </thead>
        <tbody>
          <tr :class="{'deleteStyle':display===true}">
            <!-- <tr class="deleteStyle"> -->
            <td class="projectname">1</td>
            <td class="form">text</td>
            <td class="type">文本</td>
            <td class="permission">
              <van-dropdown-menu active-color="#1989fa">
                <van-dropdown-item
                  title="权限设置"
                  v-model="value1"
                  :options="option1"
                />
                <van-dropdown-item
                  title="访问对象"
                  v-model="value2"
                  :options="option2"
                >
                  <div style="padding: 5px 16px;">
                    <van-button
                      type="danger"
                      block
                      round
                      color="#1989fa"
                      @click="onConfirm"
                    >
                      确认
                    </van-button>
                  </div>
                </van-dropdown-item>
              </van-dropdown-menu>
            </td>
            <td class="createtime">2023-11-13</td>
            <td
              class="sel"
              v-show=isShow
              @click="sel()"
            >
              选择
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer>
      <van-pagination
        v-model="currentPage"
        :total-items="125"
        :show-page-size="3"
        force-ellipses
      />
    </footer>
  </div>
</template>

<script>

import YWheaderNav from '@/components/YWheaderNav.vue'
import sidebarWork from '@/components/sidebarWork.vue'
export default {
  data () {
    return {
      isShow: false,
      display: false,
      value: '',
      value1: 0,
      value2: 'a',
      currentPage: 1,
      option1: [
        { text: '允许访问', value: 0 },
        { text: '禁止访问', value: 1 }
      ],
      option2: [
        { text: '全部', value: 'a' },
        { text: '甲公司', value: 'b' },
        { text: '乙公司', value: 'c' },
        { text: '丙公司', value: 'd' }
      ]
    }
  },
  methods: {
    onConfirm () {
      this.$refs.item.toggle()
    },
    edit () {
      this.isShow = !this.isShow
    },
    sel () {
      this.display = !this.display
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#E9F0FE')
  },
  components: {
    YWheaderNav,
    sidebarWork
  }
}
</script>

<style lang="less" scoped>
.permissionBox {
  position: relative;
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
  }
  img {
    position: absolute;
    top: 0.9375rem;
    right: 1.25rem;
    cursor: pointer;
    width: 1.5625rem;
    height: 1.5625rem;
  }
  table {
    width: 100%;
    th {
      border-radius: 5px;
      padding: 10px;
    }
    tbody {
      tr {
        td {
          border-radius: 0.625rem;
          text-align: center;
        }
        .sel {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      tr:nth-child(odd) {
        background-color: #cce8ff;
      }
    }
  }
}
footer {
  border: 0.125rem solid #0f6fde;
  border-radius: 1rem;
  padding: 0.3125rem;
  margin: 1.25rem 0 0 34rem;
  width: 40%;
}
.deleteStyle {
  background-color: #f47474 !important;
}
</style>
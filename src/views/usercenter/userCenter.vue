<template>
  <div>
    <headerNav></headerNav>
    <sidebarWork></sidebarWork>
    <div class="infoBox">
      <div class="topBox">
        <div class="left">
          <h3>基本信息</h3>
          <img
            src="../../assets/Avatar 1.png"
            alt=""
          >
        </div>
        <ul class="right">
          <li class="float">
            <p>用户名：</p>
            <p>{{ baseInfo.username }}</p>
          </li>
          <li class="float">
            <p>用户ID：</p>
            <p>{{ baseInfo.userid }}</p>
          </li>
          <li class="float">
            <p>性别：</p>
            <p>{{  baseInfo.sex }}</p>
          </li>
          <li class="float">
            <p>国籍：</p>
            <p>{{  baseInfo.nation }}</p>
          </li>
          <li class="float">
            <p>地点：</p>
            <p>{{  baseInfo.address }}</p>
          </li>
          <li class="float">
            <p>生日：</p>
            <p>{{  baseInfo.date }}</p>
          </li>
          <li class="float">
            <p>学历：</p>
            <p>{{  baseInfo.edu }}</p>
          </li>
          <li class="float">
            <p>所属行业：</p>
            <p>{{  baseInfo.industry }}</p>
          </li>
          <li class="float">
            <p>注册时间：</p>
            <p>{{  baseInfo.registerTime }}</p>
          </li>

        </ul>
        <footer>
          <img
            src="../../assets/edit 1.png"
            alt=""
          >
        </footer>
      </div>
      <div class="bottomBox">
        <header class="bingding">
          <h3>绑定信息</h3>
        </header>
        <ul>
          <li class="info">
            <p>密码：</p>
            <div> {{ bingding.password |  passwordFileter}}</div>
          </li>
          <li class="info">
            <p>手机号码</p>
            <div>{{ bingding.phone | phoneFilter}}</div>
          </li>
          <li class="info">
            <p>电子邮箱</p>
            <div>{{ bingding.email |  emailFileter}}</div>
          </li>
        </ul>
        <footer>
          <img
            src="../../assets/edit 1.png"
            alt=""
          >
        </footer>
      </div>
      <footer class="teamBox">
        <header class="team">
          <h3>从属管理</h3>
        </header>
      </footer>
    </div>
  </div>
</template>

<script>
import headerNav from '@/components/headerNav.vue'
import sidebarWork from '@/components/sidebarWork.vue'
export default {
  data () {
    return {
      baseInfo: {
        username: '标注人员',
        userid: '001',
        sex: '男',
        nation: '中国',
        address: '浙江·杭州',
        date: '2023-11-11',
        edu: '本科',
        industry: '教育',
        registerTime: '2023-11-11'
      },
      bingding: {
        password: 'asd',
        phone: '1234567890',
        email: '123456789@163.com'
      }
    }
  },
  filters: {
    passwordFileter (val) {
      return val.replace(/./g, '***')
    },
    phoneFilter (val) {
      const reg = /^(.{3}).*(.{4})$/
      return val.replace(reg, '$1****$2')
    },

    // 邮箱过滤器
    emailFileter (val) {
      const reg = /^(.{3}).*(.{9})$/
      return val.replace(reg, '$1****$2')
    }
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
body {
  position: relative;
}
.infoBox {
  position: absolute;
  top: 5.3125rem;
  left: 15.625rem;
  width: 80%;
  background-color: #e9f0fe;
  .topBox {
    display: flex;
    box-shadow: #525457 0rem 0rem 0.625rem;
    border-radius: 1rem;
    background-color: #fff;
    .left {
      padding: 0.625rem 0;
      padding-left: 1.25rem;
      h3 {
        width: 5rem;
        margin: 0.3125rem 0.3125rem;
        border-radius: 1rem;
        background-color: #9dbff1;
      }
      img {
        vertical-align: bottom;
        padding-left: 0.1875rem;
        width: 5rem;
        height: 5rem;
      }
    }
    .right {
      padding: 1.25rem 0 1.25rem 3.125rem;
      .float {
        float: left;
        width: 28.125rem;
        p {
          display: inline-block;
        }
      }
    }
    footer {
      img {
        cursor: pointer;
        padding: 0.625rem 0.625rem 0 0;
        width: 1.5625rem;
        height: 1.5625rem;
      }
    }
  }
  .bottomBox {
    position: relative;
    margin-top: 1.25rem;
    box-shadow: #525457 0rem 0rem 0.625rem;
    border-radius: 1rem;
    background-color: #fff;
    .bingding {
      padding: 0.625rem 0;
      padding-left: 1.25rem;
      h3 {
        width: 5rem;
        margin: 0.3125rem 0.3125rem;
        border-radius: 1rem;
        background-color: #9dbff1;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      padding-left: 1.875rem;
      .info {
        display: flex;
        margin: 0.625rem 0;
        p {
          margin: 0 0;
          padding: 0 1.875rem 0.625rem 0;
        }
        div {
          padding-top: 0.1875rem;
        }
      }
    }
    footer {
      position: absolute;
      top: 0.625rem;
      right: 0.625rem;
      img {
        cursor: pointer;
        width: 1.5625rem;
        height: 1.5625rem;
      }
    }
  }
  .teamBox {
    margin-top: 1.25rem;
    box-shadow: #525457 0rem 0rem 0.625rem;
    border-radius: 1rem;
    background-color: #fff;
    .team {
      padding: 0.625rem 0;
      padding-left: 1.25rem;
      h3 {
        width: 5rem;
        margin: 0.3125rem 0.3125rem;
        border-radius: 1rem;
        background-color: #9dbff1;
      }
    }
  }
}
</style>
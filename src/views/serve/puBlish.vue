<template>
  <div>
    <YWheaderNav></YWheaderNav>
    <sidebarWork></sidebarWork>
    <div class="publishBox">
      <!-- 第一个div 标注类型 -->
      <div>
        <img
          src="../../assets/file.png"
          alt=""
        >
        <span class="name">标注类型</span>
        <input
          v-if="isEditing1"
          v-model="inputText1"
          @keyup.enter="saveText('div1')"
          placeholder="请输入..."
        />
        <span class="content"> {{ text1 }}</span>
        <span
          class="edit"
          v-if=!isEditing1
          @click="editText('div1')"
        >{{ "编辑" }}</span>
        <footer></footer>
      </div>
      <!-- 第二个div 标题-->
      <div>
        <img
          src="../../assets/type.png"
          alt=""
        >
        <span class="name">标题</span>
        <input
          v-if="isEditing2"
          v-model="inputText2"
          @keyup.enter="saveText('div2')"
          placeholder="请输入..."
        />
        <span class="content"> {{ text2 }}</span>
        <span
          class="edit"
          v-if=!isEditing2
          @click="editText('div2')"
        >{{ "编辑" }}</span>
        <footer></footer>

      </div>
      <!-- 第三个div 文件上传 -->
      <div class="publishFile">
        <van-uploader>
          <van-button
            icon="plus"
            type="primary"
            round
            style="background-color: #3977f1;"
          >上传文件</van-button>
        </van-uploader>
        <footer></footer>
      </div>
      <!-- 第四个div 权限设置 -->
      <div>
        <img
          src="../../assets/锁定.png"
          alt=""
        >
        <span class="name">权限设置</span>
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
          </van-dropdown-item>
        </van-dropdown-menu>

        <footer></footer>
      </div>
      <!-- 第五个div 补充说明 -->
      <div class="add">
        <img
          src="../../assets/pen-tool.png"
          alt=""
        >
        <span class="name">补充说明</span>
        <div class="textarea">
          <textarea
            name=""
            id=""
            cols="100"
            rows="3"
            class="mo-textarea"
          ></textarea>
        </div>
        <button>发布</button>
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>
import YWheaderNav from '@/components/YWheaderNav.vue'
import sidebarWork from '@/components/sidebarWork.vue'
export default {
  data () {
    return {
      isEditing1: false,
      text1: '',
      inputText1: '',
      isEditing2: false,
      text2: '',
      inputText2: '',
      value1: 0,
      value2: 'a',
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
    editText (div) {
      if (div === 'div1') {
        this.isEditing1 = true
      } else if (div === 'div2') {
        this.isEditing2 = true
      }
    },
    saveText (div) {
      if (div === 'div1') {
        this.text1 = this.inputText1
        this.inputText1 = ''
        this.isEditing1 = false
      } else if (div === 'div2') {
        this.text2 = this.inputText2
        this.inputText2 = ''
        this.isEditing2 = false
      }
    }
  },
  components: {
    YWheaderNav,
    sidebarWork
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#E9F0FE')
  }
}
</script>

<style lang="less" scoped>
.publishBox {
  position: relative;
  width: 78% !important;
  box-shadow: #525457 0rem 0rem 0.625rem;
  border-radius: 1rem;
  background-color: #fff;
  margin: 1.875rem 0 0 17.8125rem;
  div {
    // margin: 0px 0 10px 10px;
    padding: 0.9375rem 0 0 0.9375rem;
    img {
      width: 1.875rem;
      height: 1.875rem;
      vertical-align: middle;
      padding: 0 0.9375rem0 0;
    }
    input {
      padding: 0.3125rem;
      border: 0.0625rem solid #1c69ff;
      border-radius: 1rem;
    }
    span {
      margin: 0 0.9375rem 0 0;
    }
    .name {
      color: #3d3d3d;
    }
    .edit {
      cursor: pointer;
      color: #1c69ff;
      text-decoration: underline;
    }
    .content {
      margin: 0 7.1875rem 0 0;
    }
    footer {
      display: inline-block;
      width: 100%;
      margin: 0;
      border: 0.0625rem solid #1c69ff;
    }
    .textarea {
      padding-bottom: 1.25rem;
      margin: 0.3125rem 0 0 1.75rem;
      .mo-textarea {
        display: inline-block;
        resize: vertical;
        padding: 0.3125rem 0.9375rem;
        line-height: 1.5;
        box-sizing: border-box;
        color: #606266;
        background-color: #fff;
        border: 0.125rem solid #1c69ff;
        border-radius: 1rem;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      /* 提示文字 */
      .mo-textarea::placeholder {
        color: #c0c4cc;
      }

      /* 鼠标hover */
      .mo-textarea:hover {
        border-color: #c0c4cc;
      }

      /* 获得焦点 */
      .mo-textarea:focus {
        border-color: #3677f0;
      }
    }
  }
  .add {
    padding-bottom: 5rem;
    position: relative;
    button {
      cursor: pointer;
      position: absolute;
      right: 1.875rem;
      bottom: 1.3125rem;
      padding: 0.625rem 1.875rem;
      color: #fff;
      border: none;
      background-color: #1c69ff;
      border-radius: 1rem;
    }
  }
  .publishFile {
    div {
      padding: 0.0625rem 0 0.9375rem 0.9375rem !important;
    }
    footer {
      display: inline-block;
      width: 100%;
      margin: 0;
      border: 0.0625rem solid #1c69ff;
    }
  }
}
</style>
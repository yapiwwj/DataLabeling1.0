<template>
  <div
    class="box"
    @mousedown="handleMouseDown"
  >
    <div
      class="mask"
      v-show="is_show_mask"
      :style="'width:' + mask_width + 'left:' + mask_left + 'height:' + mask_height + 'top:' + mask_top"
    ></div>
    <el-checkbox-group v-model="select_list">
      <el-checkbox
        v-for="(item, index) in data_list"
        :label="item.city_id"
        :key="index"
      >
        <p @click.stop.prevent>{{ item.city_name }}</p>
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      data_list: [
        { city_id: 35, city_name: '香港特別行' },
        { city_id: 34, city_name: '北京市' },
        { city_id: 33, city_name: '江苏省' },
        { city_id: 32, city_name: '吉林省' },
        { city_id: 31, city_name: '内蒙古自治区' },
        { city_id: 30, city_name: '内蒙古自治区' },
        { city_id: 29, city_name: '内蒙古自治区' },
        { city_id: 28, city_name: '内蒙古自治区' },
        { city_id: 26, city_name: '内蒙古自治区' },
        { city_id: 25, city_name: '内蒙古自治区' }
      ],
      select_list: [],
      is_show_mask: false,
      box_screen_left: 0,
      box_screen_top: 0,
      start_x: 0,
      start_y: 0,
      end_x: 0,
      end_y: 0
    }
  },
  computed: {
    mask_width () {
      return `${Math.abs(this.end_x - this.start_x)}px;`
    },
    mask_height () {
      return `${Math.abs(this.end_y - this.start_y)}px;`
    },
    mask_left () {
      return `${Math.min(this.start_x, this.end_x) - this.box_screen_left}px;`
    },
    mask_top () {
      return `${Math.min(this.start_y, this.end_y) - this.box_screen_top}px;`
    }
  },
  created () { },
  mounted () {
    const domBox = document.querySelector('.box')
    this.box_screen_left = domBox.getBoundingClientRect().left
    this.box_screen_top = domBox.getBoundingClientRect().top
  },
  watch: {},
  methods: {
    /* 方法 */
    handleMouseDown (event) {
      if (event.target.tagName === 'SPAN') return false
      this.is_show_mask = true
      this.start_x = event.clientX
      this.start_y = event.clientY
      this.end_x = event.clientX
      this.end_y = event.clientY
      document.body.addEventListener('mousemove', this.handleMouseMove)
      document.body.addEventListener('mouseup', this.handleMouseUp)
    },
    handleMouseMove (event) {
      this.end_x = event.clientX
      this.end_y = event.clientY
    },
    handleMouseUp () {
      document.body.removeEventListener('mousemove', this.handleMouseMove)
      document.body.removeEventListener('mouseup', this.handleMouseUp)
      this.is_show_mask = false
      this.handleDomSelect()
      this.resSetXY()
    },
    handleDomSelect () {
      const domMask = window.document.querySelector('.mask')
      const rectSelect = domMask.getClientRects()[0]
      const addList = []
      const delList = []
      document.querySelectorAll('.el-checkbox-group .el-checkbox').forEach((node, index) => {
        const rects = node.getClientRects()[0]
        if (this.collide(rects, rectSelect) === true) {
          if (this.select_list.includes(this.data_list[index].city_id)) {
            delList.push(this.data_list[index].city_id)
          } else {
            addList.push(this.data_list[index].city_id)
          }
        }
      })
      this.select_list = this.select_list.concat(addList).filter((item) => !delList.includes(item))
    },
    // eslint-disable-next-line class-methods-use-this
    collide (rect1, rect2) {
      const maxX = Math.max(rect1.x + rect1.width, rect2.x + rect2.width)
      const maxY = Math.max(rect1.y + rect1.height, rect2.y + rect2.height)
      const minX = Math.min(rect1.x, rect2.x)
      const minY = Math.min(rect1.y, rect2.y)
      if (maxX - minX <= rect1.width + rect2.width && maxY - minY <= rect1.height + rect2.height) {
        return true
      } else {
        return false
      }
    },
    resSetXY () {
      this.start_x = 0
      this.start_y = 0
      this.end_x = 0
      this.end_y = 0
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  overflow: hidden;
  user-select: none;
  .mask {
    position: absolute;
    background: #409eff;
    opacity: 0.4;
  }
  .el-checkbox-group {
    overflow: auto;
    .el-checkbox {
      width: 137px;
      margin: 0 20px 10px 0;
      float: left;
      ::v-deep .el-checkbox__input {
        padding-top: 3px;
        vertical-align: top;
      }
      p {
        width: 110px;
        white-space: pre-wrap;
      }
    }
  }
}
</style>

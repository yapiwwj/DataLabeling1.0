<template>
  <div>
    <headerNav></headerNav>
    <backGround></backGround>
    <router-view></router-view>
  </div>
</template>

<script>
// import loginSelect from '@/components/loginSelect.vue'
import backGround from '@/components/backGround.vue'
import headerNav from '@/components/headerNav.vue'
export default {
  name: 'myLogin',
  components: {
    headerNav,
    backGround
    // loginSelect
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#E5EBF3')
  }
}
</script>

<style lang="less" scoped>
</style>

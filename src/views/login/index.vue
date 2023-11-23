<template>
  <div>
    <headerNav></headerNav>
    <backGround></backGround>
    <toLogin></toLogin>
  </div>
</template>

<script>
import toLogin from '@/components/toLogin.vue'
import backGround from '@/components/backGround.vue'
import headerNav from '@/components/headerNav.vue'
export default {
  name: 'myLogin',
  components: {
    headerNav,
    backGround,
    toLogin
    // loginSelect
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#E5EBF3')
  }
}
</script>

<style lang="less" scoped>
</style>

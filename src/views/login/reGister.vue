<template>
  <div>
    <headerNav></headerNav>
    <backGround></backGround>
    <reGister></reGister>
    <img
      src="../../assets/人.png"
      alt=""
    >

  </div>
</template>

<script>
import reGister from '@/components/reGister.vue'
import backGround from '@/components/backGround.vue'
import headerNav from '@/components/headerNav.vue'
export default {
  name: 'myLogin',
  components: {
    headerNav,
    backGround,
    reGister
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#E5EBF3')
  }
}
</script>

<style lang="less" scoped>
.body {
  position: relative;
}
img {
  position: absolute;
  bottom: 0;
  left: 16.875rem;
  width: 25.625rem;
  height: 27.1875rem;
}
</style>

<template>
  <div class="bgImg">
    <header>
      <img
        src="../assets/CTA.png"
        alt=""
      >
    </header>
    <footer>
      <img
        src="../assets/Group 124.png"
        alt=""
      >
    </footer>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="less" scoped>
body {
  position: relative;
}
header {
  img {
    width: 100%;
    height: 16.25rem;
  }
}
footer {
  // margin: 15.625rem 0 0 -8.125rem;
  bottom: 0rem;
  position: absolute;
  left: -5rem;
  height: 15.3125rem;
  overflow: hidden;
  img {
    width: 37.5rem;
  }
}
</style>
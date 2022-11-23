<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center flex-column Noto-Sans-TC fs-20 test">
    <div class="sort-works-up text-white d-flex justify-content-center align-items-center">
      用<span class="fs-24">&ensp;拖移&ensp;</span>的方式調整優先順序
    </div>
    <div class="sort-works">

    </div>
    <div class="sort-works-down text-white d-flex justify-content-between align-items-center px-3">
      <div>高 ←</div>
      <div>優先權</div>
      <div>→ 低</div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.sort-works {
  width: 794px;
  height: 289px;
  border: 4px solid #FFFFFF;
  border-radius: 30px;
}
.sort-works-up {
  width: 516px;
  height: 52px;
  background: #9C0700;
  border: 5px solid #FFFFFF;
  border-radius: 16px 16px 0px 0px;
}
.sort-works-down {
  width: 516px;
  height: 52px;
  background: #000000;
  border: 5px solid #FFFFFF;
  border-radius: 0px 0px 16px 16px;
}
</style>

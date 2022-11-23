<template>
  <div class="">
    <div class="bg-poker1"></div>
    <div class="bg-poker2"></div>
    <div class="bg-logo"></div>
    <div class="bg-chips1"></div>
    <div class="bg-chips2"></div>
    <div class="bg-chips3"></div>
    <div class="bg-dice"></div>
    <p class="Noto-Sans-TC text-white fs-28 position-absolute top-50 start-50 translate-middle">
      哈囉，歡迎加入六角資訊，<br>
      在正式加入專案開發之前，<br>
      需要請你先了解 Scrum 的流程與精神！<br>
      請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧！
    </p>
    <button class="start-btn fs-28">
      開始挑戰
    </button>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.start-btn {
  position: absolute;
  right: 5%;
  bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color:  white;
  padding: 16px;
  width: 280px;
  height: 88px;
  background: #000000;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
</style>

<template>
  <div class="Noto-Sans-TC">
    <div class="bg-poker1"></div>
    <div class="bg-poker2"></div>
    <div class="bg-logo"></div>
    <div class="bg-chips1"></div>
    <div class="bg-chips2"></div>
    <div class="bg-chips3"></div>
    <div class="bg-dice1"></div>
    <h1 class="text-white fs-28 position-absolute top-50 start-50 translate-middle">
      哈囉，歡迎加入六角資訊，<br>
      在正式加入專案開發之前，<br>
      需要請你先了解 Scrum 的流程與精神！<br>
      請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧！
    </h1>
    <router-link to="/AcceptChallenge" class="next-btn fs-28">
      開始挑戰
    </router-link>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
h1 {
  line-height: 56px;
}
</style>

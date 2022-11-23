<template>
  <div class="Noto-Sans-TC">
    <div class="d-flex">
      <div class="">
        <img src="../assets/images/tina.png" alt="">
        <img src="../assets/images/tina-name.png" alt="">
      </div>
      <div class="speak">

      </div>
      <div class="cha-text fs-16">
        我是資訊，開發 A組的PO，Tina。PO也就是產品負責人(Product Owner)。產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(Product Backlog)唷！剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
      </div>
    </div>
    <div class="cha-text fs-20">
      <div>
        我們公司也推薦使用Jira做任務的管理呢！
      </div>
    </div>
    <button class="accept-btn fs-28"
            @click="this.$router.push('/AcceptChallenge')">
      接受挑戰
    </button>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.accept-btn {
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
.cha-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  width: 1098px;
  height: 152px;
  background: #FFFFFF;
  border-radius: 16px;
}
.speak {
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  rotate: 45deg;
  position: absolute;
}
</style>

<template>
  <div class="Noto-Sans-TC container">
    <div class="row">
      <div class="col-2 pt-2 ps-5 my-5">
        <img src="../assets/images/tina.png" alt="">
      </div>
      <div class="col-10 my-5 speaker-box fs-16 position-relative">
        <div class="speak"></div>
        <p class="speaker-content">
          我是資訊，開發 A組的PO，Tina。PO也就是產品負責人(Product Owner)。產品負責人會負責評估產品待辦清單的價值與重要性，依序<span class="text-danger">排列要執行的優先順序</span>，對齊產品目標。最後排出產品待辦清單(Product Backlog)唷！剛好我最近手邊有一個<span class="text-danger">『人才招募系統』</span>的案子，我才剛列出了<span class="text-danger">『產品需求清單』</span>。既然你都來了，來試試看<span class="text-danger">調整產品優先度，排出產品待辦清單吧</span>！
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-2 pt-2 ps-5">
        <!-- <img src="../assets/images/tina.png" alt="">
        <img src="../assets/images/tina-name.png" alt=""> -->
      </div>
      <div class="col-10 speaker-box fs-20 position-relative">
        <!-- <div class="speak"></div> -->
        <p>
          我們公司也推薦使用Jira做任務的管理呢！
        </p>
        <img src="../assets/images/jira.png" alt="">
      </div>
    </div>
    <router-link to="/SortWork" class="accept-btn fs-28">
      接受挑戰
    </router-link>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.accept-btn {
  text-decoration: none;
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
.speaker-box {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  width: 1098px;
  height: 100%;
  background: #FFFFFF;
  border-radius: 16px;
}
.speaker-content {
  line-height: 40px;
}
.speak {
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  rotate: 45deg;
  position: absolute;
  top: 15px;
  left: -14px;
}
</style>

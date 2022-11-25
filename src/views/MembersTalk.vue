<template>
  <div class="Noto-Sans-TC container">
    <div class="row">
      <div class="col-2 pt-2 ps-5 mt-5">
        <img src="../assets/images/tina.png" alt="">
      </div>
      <div class="col-10 mt-5 speaker-box fs-16 position-relative">
        <div class="speak"></div>
        <p class="speaker-content">
          產品待辦清單完成後，我們來召集 Scrum Master 和開發團隊共同召開短衝規劃會議(Sprint Planning)。短衝即是一個迭代，具有<span class="text-danger">固定時間限制</span>，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，<span class="text-danger">列出短衝待辦清單(Sprint Backlog</span>)，由開發團隊在接下來的產品開發週期裡執行。
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-2 pt-2 ps-5 mt-5">
        <img src="../assets/images/tim.png" alt="">
      </div>
      <div class="col-10 mt-5 speaker-box fs-16 position-relative">
        <div class="speak"></div>
        <p class="speaker-content">
          嗨嗨 你是新來的前端吧！我是這次的 Scrum Master 小捷，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。這兩位是 Jason和 Allen，是我們開發團為的成員唷～目前我們團隊一次Sprint是兩的時間，依照我的觀察，目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，<span class="text-danger">目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點</span>。
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-2 pt-2 ps-5 mt-5">
        <img src="../assets/images/jason.png" alt="">
      </div>
      <div class="col-10 mt-5 speaker-box fs-16 position-relative">
        <div class="speak"></div>
        <p class="speaker-content">
          欸新來的，你應該不知道點數是什麼意思吧 哈哈 我來跟你介紹一下吧～ <span class="text-danger">Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數</span>。
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-2 pt-2 ps-5 mt-5">
        <img src="../assets/images/allen.png" alt="">
      </div>
      <div class="col-10 mt-5 speaker-box fs-16 position-relative">
        <div class="speak"></div>
        <p class="speaker-content">
          沒錯，如果小斯哥說的，我這邊已經把剛剛討論好的<span class="text-danger">點數</span>標上去囉～ 你來練習<span class="text-danger">把任務排到短衝待辦清單吧</span>！
        </p>
      </div>
    </div>
    <router-link to="/ArrangeTasks" class="next-btn fs-28">
      接受挑戰
    </router-link>
  </div>
</template>

<script>
// import Sortable from 'sortablejs'
export default {
}
</script>

<style lang="scss" scoped>
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

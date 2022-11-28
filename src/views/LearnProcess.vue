<template>
  <div class="Noto-Sans-TC container">
    <div class="row" id="box-1">
      <div class="col-2 pt-2 ps-5 my-5">
        <img src="../assets/images/jason.png" alt="jason">
      </div>
      <div class="col-10 my-5 speaker-box fs-16 position-relative">
        <div class="speaker-arrow"></div>
        <p class="speaker-content">
          那你來試試看，在這經典的Surum流程圖中，這些流程分別代表哪一個會議呢？
        </p>
      </div>
    </div>
    <div class="row" id="box-2">
      <div class="col-2 pt-2 ps-5 "></div>
      <div class="col-10 speaker-box fs-20 position-relative">
        <p>
          Sprint是一個短衝，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議(Daily Scrum)，追蹤成員間的工作狀況，除了<span class="text-danger">每日站立會議</span>，在Sprint的結束也會包含<span class="text-danger">短衝檢視會議(Sprint Review)</span>、<span class="text-danger">短衝自省會議(Sprint Retrospective)</span>。
        </p>
      </div>
    </div>
    <div class="row" id="box-3">
      <div class="col-2 pt-2 ps-5"></div>
      <div class="col-10 speaker-box fs-20 position-relative mt-5">
        <p>
          推薦工具：
          <img src="../assets/images/confluence.png" alt="confluence-logo">
        </p>
      </div>
    </div>
    <div class="row text-white mt-5 fs-16" id="box-4">
      <div class="col-2 pt-2 ps-5"></div>
      <div class="col">
        <div class=" bg-danger title  me-3">
          每日站立會議(Daily Scrum)
        </div>
        <p class="content d-jc-ac mx-2 mt-3">
          每天都要進行的會議，以15分鐘為限制<br>
          ．昨天為團隊的短衝目標(Sprint Goal)做了那些進度<br>
          ．今天我會如何準備來幫助團隊達到短衝目標<br>
          ．過程中有遇到什麼問題、難題<br>
          透過團隊分享，追蹤大家的工作狀況。
        </p>
      </div>
      <div class="col">
        <div class="bg-secondary title me-3">
          短衝檢視會議(Sprint Review)
        </div>
        <p class="content d-jc-ac mx-2 mt-3">
          用來檢視該次短衝增量的成<br>
          果，以蒐集相關的回饋數據<br>
          或意見。
        </p>
      </div>
      <div class="col">
        <div class="bg-success title">
          短衝自省會議(Sprint Retrospective)
        </div>
        <p class="content d-jc-ac mx-2 mt-3">
          團隊在自省會議裡, 共同回顧該短衝歷程發生的事情<br>
          ．好的地方<br>
          ．可以改進的地方<br>
          ．如何維持我們已有的成功經驗<br>
          優化工作流程、讓團隊有變得更好的機會。
        </p>
      </div>
    </div>
    <router-link to="/TestProcess" class="next-btn fs-28">
      我了解了
    </router-link>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  mounted () {
    gsap.to('#box-1', { opacity: 1, duration: 1, delay: 0.5 })
    gsap.to('#box-2', { opacity: 1, duration: 1, delay: 1.5 })
    gsap.to('#box-3', { opacity: 1, duration: 1, delay: 2.5 })
    gsap.to('#box-4', { opacity: 1, duration: 1, delay: 3.5 })
  }
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
.speaker-arrow {
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  rotate: 45deg;
  position: absolute;
  top: 15px;
  left: -14px;
}
.title {
  width: 100%;
  height: 76px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 8px;
}
.content {
  font-size: 14px;
  line-height: 24px;
}
</style>

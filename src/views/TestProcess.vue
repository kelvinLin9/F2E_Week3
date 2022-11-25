<template>
  <div class="Noto-Sans-TC container">
    <div class="row">
      <div class="col-2 pt-2 ps-5 my-5">
        <img src="../assets/images/jason.png" alt="">
      </div>
      <div class="col-10 my-5 speaker-box fs-16 position-relative">
        <div class="speaker-arrow"></div>
        <p class="speaker-content">
          等等等等等，你都還不知道什麼是Sprint吧！讓我先為你介紹一下~仔細聽好，等等會考考你！
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-2 pt-2 ps-5 ">
        <!-- <img src="../assets/images/tina.png" alt="">
        <img src="../assets/images/tina-name.png" alt=""> -->
      </div>
      <div class="col-10 speaker-box fs-20 position-relative">
        <!-- <div class="speaker-arrow"></div> -->
        <p>
          Sprint是一個短衝，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議(Daily Scrum)，追蹤成員間的工作狀況，除了每日站立會議，在Sprint的結束也會包含短衝檢視會議(Sprint Review)、短衝自省會議(Sprint Retrospective)。
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-2 pt-2 ps-5">
        <!-- <img src="../assets/images/tina.png" alt="">
        <img src="../assets/images/tina-name.png" alt=""> -->
      </div>
      <div class="col-10 speaker-box fs-20 position-relative mt-5">
        <!-- <div class="speaker-arrow"></div> -->
        <p>
          推薦工具：
        </p>
        <img src="../assets/images/jira.png" alt="">
      </div>
    </div>
    <div class="row text-white mt-5">
      <div class="col">
        <div class="title">
          每日站立會議(Daily Scrum)
        </div>
          <p>
          每天都要進行的會議，以15分鐘為限制
昨天為團隊的短衝目標(Sprint Goal)做了那些進度
今天我會如何準備來幫助團隊達到短衝目標
過程中有遇到什麼問題、難題
透過團隊分享，追蹤大家的工作狀況。
        </p>
      </div>
      <div class="col">
        <div class="title">
          短衝檢視會議(Sprint Review)
        </div>
        <p>
用來檢視該次短衝增量的成
果，以蒐集相關的回饋數據
或意見。
        </p>
      </div>
      <div class="col">
        <div class="title">
          短衝自省會議(Sprint Retrospective)
        </div>
        <p>
          團隊在自省會議裡, 會共同回顧該短衝歷程發生的事情
好的地方
可以改進的地方
如何維持我們已有的成功經驗
優化工作流程、讓團隊有變得更好的機會。
        </p>
      </div>
    </div>
    <router-link to="/TestProcess" class="accept-btn fs-28">
      我了解了
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
.speaker-arrow {
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  rotate: 45deg;
  position: absolute;
  top: 15px;
  left: -14px;
}
</style>

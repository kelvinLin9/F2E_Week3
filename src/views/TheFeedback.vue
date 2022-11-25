<template>
  <div class="Noto-Sans-TC container">
    <div class="row">
      <div class="col-2 pt-2 ps-5 my-5">
        <img src="../assets/images/allen.png" alt="">
      </div>
      <div class="col-10 my-5 speaker-box fs-16 position-relative">
        <div class="speaker-arrow"></div>
        <p class="speaker-content">
          哇賽新來的，你真的很幸運，今天剛好是開發B組的 Retro，你也見識一下，看看Retro都該做些什麼吧~我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再Confluence中。
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-2 pt-2 ps-5 ">
        <!-- <img src="../assets/images/tina.png" alt="">
        <img src="../assets/images/tina-name.png" alt=""> -->
      </div>
      <div class="col-10 speaker-box position-relative">
        <!-- <div class="speaker-arrow"></div> -->
        <p>
          請選擇適合 Retro的回饋卡！思考看看哪一張牌是『正面表述』呢？
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-2 pt-2 ps-5"></div>
      <div class="col text-center text-white fs-30">
        <h2 class="my-4">做得好的地方</h2>
        <div class="row">
          <div class="col">
            <img src="../assets/images/feedback1.png" alt="">
          </div>
          <div class="col">
            <img src="../assets/images/feedback2.png" alt="">
          </div>
        </div>
      </div>
      <div class="col text-center text-white fs-30">
        <h2 class="my-4">有哪些可以做得更好？</h2>
        <div class="row">
          <div class="col">
            <img src="../assets/images/feedback3.png" alt="">
          </div>
          <div class="col">
            <img src="../assets/images/feedback4.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <router-link to="/FinishAll" class="next-btn fs-28">
      我想我了解了
    </router-link>
  </div>
</template>

<script>

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

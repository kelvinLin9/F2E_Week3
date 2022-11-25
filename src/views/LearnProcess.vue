<template>
  <div class="Noto-Sans-TC container">
    <div class="row">
      <div class="col-2 pt-2 ps-5 my-5">
        <img src="../assets/images/jason.png" alt="">
      </div>
      <div class="col-10 my-5 speaker-box fs-16 position-relative">
        <div class="speaker-arrow"></div>
        <p class="speaker-content">
          那你來試試看，在這經典的Surum流程圖中，這些流程分別代表哪一個會議呢？
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
          提示：請用拖移的方式將標籤拖移至對應的方框裡
        </p>
      </div>
    </div>
    <div class="row text-white mt-5">
      <div class="col">
        <div class="title">
          每日站立會議(Daily Scrum)
        </div>
      </div>
      <div class="col">
        <div class="title">
          短衝檢視會議(Sprint Review)
        </div>
      </div>
      <div class="col">
        <div class="title">
          短衝自省會議(Sprint Retrospective)
        </div>
      </div>
    </div>
    <router-link to="/FinishAll" class="accept-btn fs-28">
      完成
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

<template>
  <div class="Noto-Sans-TC container">
    <div class="row" id="box-1">
      <div class="col-2 pt-2 ps-5 my-5">
        <img src="../assets/images/allen.png" alt="allen">
      </div>
      <div class="col-10 my-5 speaker-box fs-16 position-relative">
        <div class="speaker-arrow"></div>
        <p class="speaker-content">
          哇賽新來的，你真的很幸運，今天剛好是開發B組的 Retro，你也見識一下，看看Retro都該做些什麼吧~我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再Confluence中。
        </p>
      </div>
    </div>
    <div class="row" id="box-2">
      <div class="col-2 pt-2 ps-5 ">
      </div>
      <div class="col-10 speaker-box position-relative">
        <p>
          請選擇適合 Retro的回饋卡！思考看看哪一張牌是『正面表述』呢？
        </p>
      </div>
    </div>
    <div class="row" id="box-3">
      <div class="col-2 pt-2 ps-5"></div>
      <div class="col text-center text-white fs-30">
        <h2 class="my-4">做得好的地方</h2>
        <div class="row">
          <div class="col">
            <img src="../assets/images/feedback1.png" alt="feedback"    class="cursor-pointer">
          </div>
          <div class="col"
              @click="answer1 = !answer1"
          >
            <img src="../assets/images/feedback2.png" alt="feedback" v-if="!answer1" class="cursor-pointer">
            <img src="../assets/images/feedback2-answer.png" alt="feedback" v-else class="cursor-pointer">
          </div>
        </div>
      </div>
      <div class="col text-center text-white fs-30">
        <h2 class="my-4">有哪些可以做得更好？</h2>
        <div class="row">
          <div class="col"
          @click="answer2 = !answer2"
          >
            <img src="../assets/images/feedback3.png" alt="feedback" v-if="!answer2" class="cursor-pointer">
            <img src="../assets/images/feedback3-answer.png" alt="feedback" v-else class="cursor-pointer">
          </div>
          <div class="col">
            <img src="../assets/images/feedback4.png" alt="feedback" class="cursor-pointer">
          </div>
        </div>
      </div>
    </div>

    <button  type="button" class="next-btn fs-28" @click="finish()">
      我想我了解了
    </button>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content fs-20">
        <div class="modal-body text-white text-center mt-4">
          選擇錯誤，請再思考一下
          <button type="button" class="btn text-white mt-4" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { gsap } from 'gsap'
export default {
  data () {
    return {
      answer1: false,
      answer2: false
    }
  },
  methods: {
    finish () {
      if (this.answer1 && this.answer2) {
        this.$router.push('/FinishAll')
      } else {
        this.modal.show()
      }
    }
  },
  mounted () {
    gsap.to('#box-1', { opacity: 1, duration: 1, delay: 0.5 })
    gsap.to('#box-2', { opacity: 1, duration: 1, delay: 1.5 })
    gsap.to('#box-3', { opacity: 1, duration: 1, delay: 2.5 })
    this.modal = new Modal(this.$refs.modal)
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
.modal-content {
  width: 486px;
  height: 216px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 30px;
  background: #000000;
  border-radius: 20px;
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 301px;
    height: 58px;
    background: #9C0700;
    border-radius: 9px;
  }
}
</style>

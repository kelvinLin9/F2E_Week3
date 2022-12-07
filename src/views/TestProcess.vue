<template>
  <div class="Noto-Sans-TC container">
    <div class="bg-test-process"></div>
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
      <div class="col-2 pt-2 ps-5 ">
      </div>
      <div class="col-10 speaker-box position-relative">
        <p class="text-danger">
          提示：請用拖移的方式將標籤拖移至對應的方框裡
        </p>
      </div>
    </div>
    <div class="row text-white mt-5 fs-16" id="box-3">
      <div class="col-2 pt-2 ps-5"></div>
      <div class="col">
        <div class=" bg-danger title-box-red">
          每日站立會議(Daily Scrum)
        </div>
      </div>
      <div class="col" id="g1">
        <div class="bg-secondary title-box cursor-pointer">
          短衝檢視會議(Sprint Review)
          <img src="../assets/images/move-icon.png" alt="move-icon">
        </div>
      </div>
      <div class="col" id="g3">
        <div class="bg-success title-box cursor-pointer">
          短衝自省會議(Sprint Retrospective)
          <img src="../assets/images/move-icon.png" alt="move-icon">
        </div>
      </div>
    </div>
    <div class="place-box1" id="g2"></div>
    <div class="place-box2" id="g4"></div>
    <button  type="button" class="next-btn fs-28" @click="finish()">
      完成
    </button>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content fs-20">
        <div class="modal-body text-white text-center mt-4">
          置入錯誤，請重新置入
          <button type="button" class="btn text-white mt-4" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import Sortable from 'sortablejs'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      putToBox1: false,
      putToBox2: false
    }
  },
  methods: {
    finish () {
      if (this.putToBox1 && this.putToBox2) {
        this.$router.push('/TheFeedback')
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
    const g1 = document.getElementById('g1')
    Sortable.create(g1, {
      group: 'box1',
      animation: 500
    })
    const g2 = document.getElementById('g2')
    Sortable.create(g2, {
      group: 'box1',
      animation: 500,
      onAdd: (e) => {
        this.putToBox1 = true
      },
      onRemove: (e) => {
        this.putToBox1 = false
      }
    })
    const g3 = document.getElementById('g3')
    Sortable.create(g3, {
      group: 'box2',
      animation: 500
    })
    const g4 = document.getElementById('g4')
    Sortable.create(g4, {
      group: 'box2',
      animation: 500,
      onAdd: (e) => {
        this.putToBox2 = true
      },
      onRemove: (e) => {
        this.putToBox2 = false
      }
    })
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
.title-box-red {
  width: 309px;
  height: 76px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 8px;
  position: absolute;
  top: 55%;
  left: 15%;
}
.title-box {
  width: 309px;
  height: 76px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 8px;
    &:hover {
    transform: scale(1.05);
  }
}
.place-box1 {
  width: 309px;
  height: 80px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 8px;
  position: absolute;
  bottom: 17%;
  left: 40%;
  border: dashed 3px #FF7E06;
}
.place-box2 {
  width: 309px;
  height: 80px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 8px;
  position: absolute;
  bottom: 17%;
  left: 60%;
  border: dashed 3px #009A50;
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

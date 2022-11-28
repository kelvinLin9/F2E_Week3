<template>
  <div class="container vh-100 d-jc-ac flex-column Noto-Sans-TC fs-20">
    <div>
      <div class="container text-white position-relative">
        <p class="todolist text-white fs-30">產品待辦清單</p>
        <div class="row" id="g1">
          <div class="col-3 " data-score="8">
            <img src="../assets/images/todo5.png" alt="todo-card" class="card cursor-pointer">
          </div>
          <div class="col-3" data-score="8">
            <img src="../assets/images/todo6.png" alt="todo-card" class="card cursor-pointer">
          </div>
          <div class="col-3" data-score="13">
            <img src="../assets/images/todo7.png" alt="todo-card" class="card cursor-pointer">
          </div>
          <div class="col-3" data-score="5">
            <img src="../assets/images/todo8.png" alt="todo-card" class="card cursor-pointer">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="container sort-works text-white position-relative">
        <p class="todolist text-white fs-30">開發 A 組 <br>短衝待辦清單</p>
        <div class="row" id="g2">
        </div>
      </div>
      <div class="text-white text-center mt-3">
        請把需求拖移到方框中(加總後不得超過20點)
      </div>
    </div>
    <div class="total-score text-white fs-40 Roboto ms-auto">
      <span :class="{'text-danger' : totalScore > 20}">{{ totalScore }}</span> / 20
    </div>
    <button  class="next-btn fs-28" @click="ready">
      準備好了！<br>
      開始 Sprint
    </button>
  </div>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modalZero">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content fs-20">
        <div class="modal-body text-white text-center mt-4">
          尚未置入任何項目，請置入項目
          <button class="btn text-white mt-4" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modalOver20">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content fs-20">
        <div class="modal-body text-white text-center mt-4">
          超過20點，請再調整清單
          <button class="btn text-white mt-4" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-chips5"></div>
  <!-- <audio src="../assets/sounds/過關音效.m4a"></audio> -->
</template>

<script>
import Sortable from 'sortablejs'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      totalScore: 0
    }
  },
  methods: {
    ready () {
      if (this.totalScore === 0) {
        this.modalZero.show()
      } else if (this.totalScore > 20) {
        this.modalOver20.show()
      } else {
        this.$router.push('/LearnProcess')
      }
    },
    playAudio () {
    }
  },
  mounted () {
    this.playAudio()
    this.modalZero = new Modal(this.$refs.modalZero)
    this.modalOver20 = new Modal(this.$refs.modalOver20)
    const g1 = document.getElementById('g1')
    Sortable.create(g1, {
      group: 'QQ',
      animation: 500,
      dataIdAttr: 'data-score'
    })
    // console.log(backlog)
    const g2 = document.getElementById('g2')
    const sprint = Sortable.create(g2, {
      group: 'QQ',
      animation: 500,
      dataIdAttr: 'data-score',
      onAdd: (e) => {
        const arr = sprint.toArray()
        this.totalScore = 0
        arr.forEach((item) => {
          this.totalScore += parseInt(item, 10)
        })
      },
      onRemove: (e) => {
        const arr = sprint.toArray()
        this.totalScore = 0
        arr.forEach((item) => {
          this.totalScore += parseInt(item, 10)
        })
      }
    })
  }

}
</script>

<style lang="scss" scoped>
#g1,#g2 {
  width: 794px;
  height: 289px;
}
.sort-works {
  width: 794px;
  height: 289px;
  border: 4px solid #FFFFFF;
  border-radius: 30px;
}
.card {
  // width: 167px;
  // height: 235px;
  margin-top: 25px;
    &:hover {
    transform: scale(1.05);
  }
}
.todolist {
  position: absolute;
  top: 50%;
  left: -27%;
  transform: translateY(-50%);
}
.table {
  // width: 168px;
  height: 236px;
  border: 2px dashed #FFFFFF;
}
.total-score{
  position: absolute;
  bottom: 17%;
  right: 11%;
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

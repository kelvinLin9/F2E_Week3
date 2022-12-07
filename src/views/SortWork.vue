<template>
  <div class="container vh-100 d-jc-ac flex-column Noto-Sans-TC fs-20">
    <div class="sort-works-up text-white d-jc-ac">
      用<span class="fs-24">&ensp;拖移&ensp;</span>的方式調整優先順序
    </div>
    <div class="container sort-works text-white position-relative">
      <p class="todolist text-white fs-30">產品待辦清單</p>
      <div class="row mt-4" id="sort-works">
        <div class="col sort-work cursor-pointer" data-id="4">
          <img src="../assets/images/todo4.png" alt="todo-card">
        </div>
        <div class="col sort-work cursor-pointer" data-id="2">
          <img src="../assets/images/todo2.png" alt="todo-card">
        </div>
        <div class="col sort-work cursor-pointer" data-id="1">
          <img src="../assets/images/todo1.png" alt="todo-card">
        </div>
        <div class="col sort-work cursor-pointer" data-id="3">
          <img src="../assets/images/todo3.png" alt="todo-card">
        </div>
      </div>
    </div>
    <div class="sort-works-down text-white d-flex justify-content-between align-items-center px-3">
      <div>高 ←</div>
      <div>優先權</div>
      <div>→ 低</div>
    </div>
    <button  type="button" class="next-btn fs-28" @click="finish">
      完成
    </button>
  </div>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content fs-20">
        <div class="modal-body text-white text-center mt-4">
          哦歐！排序錯誤，請再調整順序
          <button type="button" class="btn text-white mt-4" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dice2"></div>
  <div class="bg-chips4"></div>
</template>

<script>
import Sortable from 'sortablejs'
import router from '@/router'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      sortedCorrectly: false
    }
  },
  methods: {
    finish () {
      if (this.sortedCorrectly) {
        router.push('/MembersTalk')
      } else {
        this.modal.show()
      }
    }
  },
  mounted () {
    const sortWorks = document.getElementById('sort-works')
    const answerArr = ['1', '2', '3', '4']
    const ops = {
      animation: 1000,
      onEnd: (e) => {
        // 获取拖动后的排序
        const arr = sortable.toArray()
        if (arr.toString() === answerArr.toString()) {
          this.sortedCorrectly = true
        } else {
          this.sortedCorrectly = false
        }
      }
    }
    const sortable = Sortable.create(sortWorks, ops)
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>

<style lang="scss" scoped>
.sort-works {
  width: 794px;
  height: 289px;
  border: 4px solid #FFFFFF;
  border-radius: 30px;
}
.sort-works-up {
  width: 516px;
  height: 52px;
  background: #9C0700;
  border: 5px solid #FFFFFF;
  border-radius: 16px 16px 0px 0px;
}
.sort-works-down {
  width: 516px;
  height: 52px;
  background: #000000;
  border: 5px solid #FFFFFF;
  border-radius: 0px 0px 16px 16px;
}
.sort-work {
  width: 167px;
  height: 235px;
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

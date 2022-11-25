<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center flex-column Noto-Sans-TC fs-20">
    <p class="todolist text-white fs-30">產品待辦清單</p>
    <div class="sort-works-up text-white d-flex justify-content-center align-items-center">
      用<span class="fs-24">&ensp;拖移&ensp;</span>的方式調整優先順序
    </div>
    <div class="container sort-works text-white">
      <div class="row mt-4" id="sort-works">
        <div class="col sort-work" data-id="4">
          <img src="../assets/images/todo4.png" alt="">
        </div>
        <div class="col sort-work" data-id="2">
          <img src="../assets/images/todo2.png" alt="">
        </div>
        <div class="col sort-work" data-id="1">
          <img src="../assets/images/todo1.png" alt="">
        </div>
        <div class="col sort-work" data-id="3">
          <img src="../assets/images/todo3.png" alt="">
        </div>
      </div>
    </div>
    <div class="sort-works-down text-white d-flex justify-content-between align-items-center px-3">
      <div>高 ←</div>
      <div>優先權</div>
      <div>→ 低</div>
    </div>
    <button  class="next-btn fs-28" @click="finish">
      完成
    </button>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
import router from '@/router'
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
        alert('FQ')
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
    // 初始化
    var sortable = Sortable.create(sortWorks, ops)
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
}
.todolist {
  position: absolute;
  top: 50%;
  left: 13%;
}
</style>

<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center flex-column Noto-Sans-TC fs-20">
    <div class="test">
      <!-- <p class="todolist text-white fs-30">產品待辦清單</p> -->
      <div class="container sort-works text-white">
        <div class="row mt-4" id="g1">
          <div class="col-3 card" data-id="1">
            <img src="../assets/images/todo5.png" alt="">
          </div>
          <div class="col-3 card" data-id="2">
            <img src="../assets/images/todo6.png" alt="">
          </div>
          <div class="col-3 card" data-id="3">
            <img src="../assets/images/todo7.png" alt="">
          </div>
          <div class="col-3 card" data-id="4">
            <img src="../assets/images/todo8.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="test mt-5">
      <!-- <p class="todolist text-white fs-30">
        開發 A 組 <br>短衝待辦清單
      </p> -->
      <div class="container sort-works text-white">
        <div class="row mt-4" id="g2">
          <!-- <div class="col-12 table test" >

          </div> -->
          <!-- <div class="col-3 table">

          </div> -->
          <!-- <div class="col-2 table" data-id="7">

          </div> -->
          <!-- <div class="col-2 table" data-id="8">

          </div> -->
        </div>
      </div>
      <div class="text-white text-center">
        請把需求拖移到方框中(加總後不得超過20點)
      </div>
    </div>
    <router-link to="/LearnProcess" class="next-btn fs-28">
      準備好了！
      開始 Sprint
    </router-link>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  mounted () {
    // 第一组
    const g1 = document.getElementById('g1')
    const candidate = Sortable.create(g1, {
      group: 'shart',
      animation: 500
    })
    console.log(candidate)
    // 第二组
    const g2 = document.getElementById('g2')
    const ops2 = {
      animation: 1000,
      group: 'shart'
    }
    var sortable2 = Sortable.create(g2, ops2)
    console.log(sortable2)
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
.card {
  width: 167px;
  height: 235px;
}
.todolist {
  position: absolute;
  top: 50%;
  left: 13%;
}
.table {
  // width: 168px;
  height: 236px;
  border: 2px dashed #FFFFFF;
}
</style>

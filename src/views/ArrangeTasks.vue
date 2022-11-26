<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center flex-column Noto-Sans-TC fs-20">
    <div class="">
      <!-- <p class="todolist text-white fs-30">產品待辦清單</p> -->
      <div class="container text-white">
        <div class="row test" id="g1">
          <div class="col-3 card test" data-score="8">
            <img src="../assets/images/todo5.png" alt="">
          </div>
          <div class="col-3 card test" data-score="8">
            <img src="../assets/images/todo6.png" alt="">
          </div>
          <div class="col-3 card test" data-score="13">
            <img src="../assets/images/todo7.png" alt="">
          </div>
          <div class="col-3 card test" data-score="5">
            <img src="../assets/images/todo8.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <!-- <p class="todolist text-white fs-30">
        開發 A 組 <br>短衝待辦清單
      </p> -->
      <div class="container sort-works text-white">
        <div class="row test" id="g2">
        </div>
      </div>
      <div class="text-white text-center">
        請把需求拖移到方框中(加總後不得超過20點)
      </div>
    </div>
    <div class="text-white fs-40 Roboto test ms-auto">
      {{ totalScore }} / 20
    </div>
    <router-link to="/LearnProcess" class="next-btn fs-28">
      準備好了！<br>
      開始 Sprint
    </router-link>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  data () {
    return {
      totalScore: 0
    }
  },
  mounted () {
    const g1 = document.getElementById('g1')
    const backlog = Sortable.create(g1, {
      group: 'QQ',
      animation: 500,
      dataIdAttr: 'data-score'
    })
    console.log(backlog)
    const g2 = document.getElementById('g2')
    const sprint = Sortable.create(g2, {
      group: 'QQ',
      animation: 500,
      dataIdAttr: 'data-score',
      onAdd: (e) => {
        const arr = sprint.toArray()
        console.log(arr)
      },
      onRemove: (e) => {
        const arr = sprint.toArray()
        console.log(arr)
      }
    })

    console.log(sprint)
  }

}
</script>

<style lang="scss" scoped>
#g1,#g2 {
  width: 794px;
  height: 298px;
}
.sort-works {
  width: 794px;
  height: 298px;
  border: 4px solid #FFFFFF;
  border-radius: 30px;
}
.card {
  width: 167px;
  height: 235px;
  margin: 31.5px 15.75px 0px 15.75px ;
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

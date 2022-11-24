<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center flex-column Noto-Sans-TC fs-20 test">
    <div class="sort-works-up text-white d-flex justify-content-center align-items-center">
      用<span class="fs-24">&ensp;拖移&ensp;</span>的方式調整優先順序
    </div>
    <div class="container sort-works text-white">
      <div class="row mt-4" id="sort-works">
        <div class="col sort-work" data-id="1">
          <img src="../assets/images/todo1.png" alt="">
        </div>
        <div class="col sort-work" data-id="2">
          <img src="../assets/images/todo2.png" alt="">
        </div>
        <div class="col sort-work" data-id="3">
          <img src="../assets/images/todo3.png" alt="">
        </div>
        <div class="col sort-work" data-id="4">
          <img src="../assets/images/todo4.png" alt="">
        </div>
      </div>
    </div>
    <div class="sort-works-down text-white d-flex justify-content-between align-items-center px-3">
      <div>高 ←</div>
      <div>優先權</div>
      <div>→ 低</div>
    </div>
    <router-link to="/MembersTalk" class="accept-btn fs-28">
      完成
    </router-link>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  mounted () {
    // 获取对象
    const el = document.getElementById('sort-works')
    // 设置配置
    const ops = {
      animation: 1000,
      // 拖动结束
      onEnd: function (evt) {
        console.log(evt)
        // 获取拖动后的排序
        const arr = sortable.toArray()
        alert(JSON.stringify(arr))
      }
    }
    // 初始化
    var sortable = Sortable.create(el, ops)
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
</style>

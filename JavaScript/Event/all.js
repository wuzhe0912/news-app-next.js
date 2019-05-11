// 靜態事件處理
function over (val) {
  val.style.color = 'red';
}

function out (val) {
  val.style.color = 'green';
}

// 動態註冊事件處理
function init () {
  let btn = document.querySelector('.btn')
  let handler = function () {
    console.log('try')
  }
  // 第一個參數放入事件名稱，第二個放入欲執行的函數
  btn.addEventListener('mouseover', handler)
}
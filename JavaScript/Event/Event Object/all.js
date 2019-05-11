function init () {
  let btn = document.querySelector('.btn')
  // 此處的參數 e 被指向為 event object
  let handler = function (e) {
    // 因此可以被用來執行任何事件方法
    console.log(e.clientX + "," + e.clientY)
  }
  btn.addEventListener('mouseover', handler)
  /*
    1. user click button，觸發 click event
    2. browser 主動收集和 event 有關的資訊，並製造出 event object
    3. 呼叫已經註冊的事件處理器
  */
  document.addEventListener('keydown', function(e) {
    let a = e.keyCode
    console.log(a)
  })
}
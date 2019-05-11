function getData (pageName) {
  // XMLHttpRequest 是 JavaScript 原生的物件，用於 Ajax 和 server 端進行連線
  const req = new XMLHttpRequest()
  // 第一個參數設定連線的方法為何，第二參數放入連線的網址
  // open 事件，建立連線
  req.open('get', 'http://127.0.0.1:8080/' + pageName) // 透過參數產生動態 url
  // onload 事件，偵測連線狀態
  req.onload = function () {
    let content = document.querySelector('.wrap')
    content.innerHTML = this.responseText
  }
  // send 事件，送出連線
  req.send()
}
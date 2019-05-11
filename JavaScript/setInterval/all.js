let timer
function init() {
  timer = document.querySelector('.time')
  // setTimeout 
  setTimeout(countdown, 1000)
}

function countdown () {
  timer.innerHTML = timer.innerHTML - 1
  if (timer.innerHTML > 0) {
    setTimeout(countdown, 1000)
  } else {
    // 清除計時器
    // clearTimeout
    // 或者執行任何工作
    document.location = 'https://google.com'
  }
}
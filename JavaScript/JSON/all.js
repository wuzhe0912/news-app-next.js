// JSON: JavaScript Object Notation (JavaScript 物件表示法)

// 原始寫法
// let point = new Object()
// point.x = 3
// point.y = 4
// point.get = function () {
//   console.log(this.x + ',' + this.y)
// }

// JSON 寫法
let point = {
  "x": 3,
  "y": 4,
  'get': function () {
    console.log(this.x + ',' + this.y)
  }
}

point.get()


// 未轉換前，可以檢查到 point 是一個物件
console.log(typeof (point))
console.log(point)

// 物件結構與 JSON 格式字串轉換，使用內建 JSON 物件中的方法
// 1. 使用 JSON.stringify(物件)，將物件轉換成 JSON 格式的字串，但會忽略掉函數的部分
let jsonStr = JSON.stringify(point)
console.log('checkString')
console.log(typeof (jsonStr))

// 2. 使用 JSON.parse(JSON 格式字串)，將字串轉換成物件結構
// 因為在轉換成字串時，函數被忽略，因此再轉回物件時，自然函數也被忽略
let jsonObject = JSON.parse(jsonStr)
console.log('checkObject')
console.log(typeof (jsonObject))
console.log(jsonObject)
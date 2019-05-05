// -- querySelector -- 
let el = document.querySelector(".titleClass");
el.textContent = "123";

// -- querySelectorAll--
// 撈取多筆資料
let newEl = document.querySelectorAll(".subTitleClass em");
let newElList = newEl.length
for (let node = 0;node < newElList;node++) {
  newEl[node].textContent = node + '123'
}
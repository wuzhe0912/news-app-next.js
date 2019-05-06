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

// -- setAttribute --
let elSet = document.querySelector('.setTitle a');
// 修改屬性
elSet.setAttribute('href', 'https://google.com');
// 帶值給屬性
let elStr = document.querySelector('.str');
elStr.setAttribute('id', 'strId');
// 取出屬性
let getEl = document.querySelector('.setTitle a').getAttribute('href');
let getEl2 = document.querySelector('.setTitle').innerHTML;
console.log(getEl);
console.log(getEl2);
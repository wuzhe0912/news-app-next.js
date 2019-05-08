// createElement 如字義，創建元素
// 相對於 innerHTML 更為友善，僅是動態掛入元素，而非取代
let str = document.createElement('em');
str.textContent = 'test 123'
str.setAttribute('class', 'color');

// appendChid 的用法，為增加子節點
document.querySelector('.title').appendChild(str)
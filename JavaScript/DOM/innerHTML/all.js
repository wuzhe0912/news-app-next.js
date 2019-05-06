let el = document.getElementById('main');
el.innerHTML = '<h1 class="blue">124</h1>';
// innerHTML 的特性，會在你指定的 id 或 class，將其清空後塞入 html

// -- 利用 innerHTML 組字串 --
let strEl = document.querySelector('.list');
let link = 'https://google.com';
let name = 'Pitt'
strEl.innerHTML = '<li><a href="'+ link +'">'+ name +'</a></li>'
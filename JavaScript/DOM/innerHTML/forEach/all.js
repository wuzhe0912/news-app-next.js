let farms = [
  {
    farmer: 'NiNi',
    cats: [ 'Yami', 'Noni']
  },
  {
    farmer: 'Kiki',
    cats: [ 'Gini', 'Koya']
  }
]

let el = document.querySelector('.list');
let str = '';
farms.forEach((node, index) => {
  let content = '<li>'+ farms[index].farmer +'</li>';
  // innerHTML 具有刪除前項資料的屬性，透過空字串累加迴避這個坑
  str += content;
})
el.innerHTML = str;
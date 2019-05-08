let gameList = [
  {
    player: 'Pitt',
    weapon: 'bow'
  },
  {
    player: 'Kana',
    weapon: ['bow', 'sword']
  }
]
let el = document.querySelector('.list');
let str = '';

gameList.forEach((node, index) => {
  let str = document.createElement('li');
  str.textContent = gameList[index].player
  el.appendChild(str);
});

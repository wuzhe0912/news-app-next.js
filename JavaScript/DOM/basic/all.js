function change () {
  let el = document.getElementById('emotion');
  el.innerHTML = 'text is change';
  el.style.color = 'blue';
  el.style.fontWeight = 'bold';
  setTimeout(() => {
    el.style.display = 'none';
  }, 2000)
}
menu = document.getElementById('itens');

const clickMenu = () => {
  if (menu.style.display == 'block') {
    menu.style.display = 'none';
  }
  else {
    menu.style.display = 'block';
  }
}

const mudouTamanho = () => {
  if (window.innerWidth >= 769) {
    menu.style.display = 'block';
  }
  else {
    menu.style.display = 'none';
  }
}

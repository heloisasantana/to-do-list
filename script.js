function addOrRemoveCompleted(event) {
  event.target.classList.toggle('completed');
}

function corDeFundo(event) {
  const itemLista = document.getElementsByTagName('li');
  for (let index = 0; index < itemLista.length; index += 1) {
    itemLista[index].classList.remove('item-selecionado');
  }
  event.target.classList.add('item-selecionado');
}

function adicionaTarefa() {
  const listaOrdenada = document.getElementById('lista-tarefas');
  const inputTexto = document.getElementById('texto-tarefa');
  const itemListaCriado = document.createElement('li');
  itemListaCriado.addEventListener('click', corDeFundo);
  itemListaCriado.addEventListener('dblclick', addOrRemoveCompleted);
  itemListaCriado.innerText = inputTexto.value;
  listaOrdenada.appendChild(itemListaCriado);
  itemListaCriado.className = 'item-lista';
  inputTexto.value = '';
}

const botaoAdicionar = document.getElementById('criar-tarefa');
botaoAdicionar.addEventListener('click', adicionaTarefa);

function apagaTudo() {
  const listaOrdenada = document.getElementById('lista-tarefas');
  listaOrdenada.innerHTML = '';
}

const botaoApagar = document.getElementById('apaga-tudo');
botaoApagar.addEventListener('click', apagaTudo);

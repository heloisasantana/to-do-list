// Requisito 5 e 6
const botaoAdicionar = document.getElementById("criar-tarefa");
botaoAdicionar.addEventListener("click", adicionaTarefa);

function adicionaTarefa() {
const listaOrdenada = document.getElementById("lista-tarefas");
const inputTexto = document.getElementById("texto-tarefa");
const itemListaCriado = document.createElement("li");
itemListaCriado.addEventListener("click", corDeFundo);
itemListaCriado.innerText = inputTexto.value;
listaOrdenada.appendChild(itemListaCriado);
itemListaCriado.className = "item-lista";
inputTexto.value = "";
}

// Requisito 7
function corDeFundo(event){
event.target.classList.add("item-selecionado");
}



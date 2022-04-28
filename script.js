const botaoAdicionar = document.getElementById("criar-tarefa");
botaoAdicionar.addEventListener("click", adicionaTarefa);

function adicionaTarefa() {
const listaOrdenada = document.getElementById("lista-tarefas");
const inputTexto = document.getElementById("texto-tarefa");
const itemLista = document.createElement("li");
itemLista.innerText = inputTexto.value;
listaOrdenada.appendChild(itemLista);
inputTexto.value = "";
}


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
const itemLista = document.getElementsByTagName("li");
for (let index = 0; index < itemLista.length; index += 1)
{itemLista[index].classList.remove("item-selecionado")}
event.target.classList.add("item-selecionado")
}







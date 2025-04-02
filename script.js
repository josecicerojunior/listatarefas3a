// variáveis para selecionar elementos no documento HTML
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
// lista para armazenar tarefas
let tarefas = [];

// função para adicionar tarefas com estrutura condicional
function addTarefas() {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!");
  } else {
    let novaTarefa = inputElement.value;
    tarefas.push(novaTarefa);
    // Limpa o campo input
    inputElement.value = "";
  }
}
buttonElement.onclick = addTarefas;

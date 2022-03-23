// Criar a lista

const botao = document.querySelector('#criar-tarefa');
const texto = document.querySelector('#texto-tarefa');

botao.addEventListener('click', realizarTarefa);

function realizarTarefa() {
  let escrita = document.createElement('li');
  escrita.innerText = texto.value;
  // escrita.classList.add('selected');
  let amazenar = document.querySelector('#lista-tarefas');
  amazenar.appendChild(escrita);
  texto.value = '';
}

// Selecionar e mudar a cor do fundo

function mudarCor(eventClick) {
  const corSelecionado = document.querySelector('.selected');
  corSelecionado.classList.remove('selected');
  eventClick.target.classList.add('selected');
}
const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', mudarCor);

// Riscar quando eu dou double click

// Pontos importantes sobre este requisito:

// * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

// * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

function riscar(evento) {
  if (evento.target.classList.contains('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}
lista.addEventListener('dblclick', riscar);

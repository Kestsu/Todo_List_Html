const botao = document.querySelector('#criar-tarefa');
const texto = document.querySelector('#texto-tarefa');

botao.addEventListener('click', realizarTarefa);

function realizarTarefa() {
  let escrita = document.createElement('li');
  escrita.innerText = texto.value;
  let amazenar = document.querySelector('#lista-tarefas');
  amazenar.appendChild(escrita);
  texto.value = ''
}

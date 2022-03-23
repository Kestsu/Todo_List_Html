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

// function mudaCor() {
//   document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('word')) {
//       event.target.classList.add('gray');
//     }
//   });
// }
// mudaCor();

function mudarCor(eventClick) {
  const corSelecionado = document.querySelector('.selected');
  corSelecionado.classList.remove('selected');
  eventClick.target.classList.add('selected');
}
const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', mudarCor);

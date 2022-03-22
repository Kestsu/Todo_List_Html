const botao = document.querySelector('#criar-tarefa');
const texto = document.querySelector('#texto-tarefa');

botao.addEventListener('click', realizarTarefa);

function realizarTarefa() {
  let escrita = document.createElement('li');
  escrita.innerText = texto.value;
  escrita.classList.add('word');
  let amazenar = document.querySelector('#lista-tarefas');
  amazenar.appendChild(escrita);
  texto.value = '';
}

function mudaCor() {
    document.addEventListener('click', function (event) {
      if (
        event.target.classList.contains('word')
      ) {
          event.target.style.backgroundColor = 'gray'
      }
    }
    )
}
mudaCor();



let decisao = prompt(
  `1-Você vai pra cima igual Ronaldo e se consagra?  \n  2-Começa a chorar e diz que quer a mamãe?`
);
//Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      `1-Você vai pra cima igual Ronaldo e se consagra?  \n  2-Começa a chorar e diz que quer a mamãe?`
    );
  }
  tentativas++;
}
//Validação de escolha!
if (decisao != "1" && decisao != "2") gameOver();

//funções !
decide(decisao);
function decide(decisao) {
  if (decisao === "1") {
    document.write(
      `
        <div class = 'fase1'>
        <h1>EU JÁ SABIA!!! O CARA BATEU NO PEITO E MATOU NO ÂNGULO!! Parabéns Zé! Você é o nosso herói!!</h1>
        <div class='decisao2'>
          <a class="decidir botao" href="../../index.html">Clique para voltar ao início!</a>
        </div>
        <img class= "super jim" src="../images/gif-fase-3.gif" alt="super-heroi">
        <div>
        `
    );
  } else if (decisao === "2") {
    document.write(
      `<div class= "fase1">
        <h1>Sério ? Depois de tudo você para logo agora? Era melhor ter ido ver o filme do pelé...</h1>
        <div class='decisao2'>
          <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o <br>início.</a>
        </div>
        <img class= "super pele" src="../images/pele.JPG"  alt="gameover">
        `
    );
  }
}
function gameOver() {
  document.write(`
  <div class='gameOver'>
    <p>Ta querendo bugar o meu game bro?</p>
    <img class='gameOverImg' src="../../images/game-over-gif.gif" alt="Game Over">
    <a class="decidir botao" href="../../index.html">Clique aqui para voltar para a tela inicial.</a>
  </div>  
  `);
}

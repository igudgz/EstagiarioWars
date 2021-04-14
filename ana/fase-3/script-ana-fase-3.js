let decisao = prompt(
  `1-Ai meu Deus, eu esqueci de tirar a roupa do varal, ja volto! \n 2-Esse dai vai da nem como prato principal! 1`
);
////Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      `1-Ai meu Deus, eu esqueci de tirar a roupa do varal, ja volto! \n 2-Esse dai vai da nem como prato principal! `
    );
  }
  tentativas++;
}
//Validação de escolha
if (decisao != "1" && decisao != "2") gameOver();
//funções !
decide(decisao);
function decide(decisao) {
  if (decisao === "2") {
    document.write(
      `
      <div class = 'fase1'>
      <h1>GG WP Alienígenas imundos!Todos fracos perante a chefe Ana! Agora você pode focar no seu estágio e preparar um rango para todos nós!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o início.</a>
      </div>
      <img class= "super " src="../images/gif-fase-3-feliz.gif" alt="super-heroi">
      <div>
      `
    );
  } else if (decisao === "1") {
    document.write(
      `<div class= "fase1">
      <h1>Com tanto esforço você toma essa decisão? Eu e o Vegeta estamos decepcionados com você.</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o <br>início.</a>
      </div>
      <img class= "super jim" src="../images/gif-fase-3.gif" alt="gameover">
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

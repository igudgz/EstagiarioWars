let decisao = prompt(
  `1-Como vou ser cozinheira sem pessoas na terra para comer?Vamo Que Vamo chutar bundas alienígenas! \n 2-To ficando maluca, melhor ficar quieta cozinhando. `
);
////Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      `1-Como vou ser cozinheira sem pessoas na terra para comer? Vamo Que Vamo chutar bundas alienígenas! \n 2-To ficando maluca, melhor ficar quieta cozinhando. `
    );
  }
  tentativas++;
}
//Validação de escolha
if (decisao != "1" && decisao != "2") gameOver();
//funções !
decide(decisao);
function decide(decisao) {
  if (decisao === "1") {
    document.write(
      `
      <div class = 'fase1'>
      <h1>Isso aí Ana! Pega umas panelas ai e vamos cair dentro desse desafio!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../fase-2/fase-2-ana.html">Clica aqui e vamo da uma <br>de Rambo!</a>
      </div>
      <img class= "super " src="../images/gif-fase1.gif" alt="super-heroi">
      <div>
      `
    );
  } else if (decisao === "2") {
    document.write(
      `<div class= "fase1">
      <h1>Meu Deus, logo no começo do game já está amarelando?</h1>
      <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o início.</a>
      <img class= "super" src="../images/triste-fase-1.png" alt="gameover">
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

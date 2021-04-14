let decisao = prompt(
  ` 1- Sai correndo como um covarde ? \n 2-Você salva as suas amigas e segue o seu caminho de badass! `
);
//Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      ` 1- Sai correndo como um covarde ? \n 2-Você salva as suas amigas e segue o seu caminho de badass!  `
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
      <h1>Caraca véi!Quem é Capitão América perto de você!!!Agora é hora de você chamar a responsa para si!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../fase-3/fase-3.html">Da um clique aqui para provar o teu valor!</a>
      </div>
      <img class= "super capitao" src="../images/gif-cap.gif" alt="super-heroi">
      <div>
      `
    );
  } else if (decisao === "1") {
    document.write(
      `<div class= "fase1">
      <h1>Eu já sabia que você era um covarde mesmo!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o <br>início.</a>
      </div>
      <img class= "super" src="../images/raiva.png" alt="gameover">
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

let decisao = prompt(
  ` 1- Esquece o café e vai ser o HERÓI! \n   2 -  Termina o café porque o chefe é prioridade`
);
//Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      ` 1- Esquece o café e vai ser o HERÓI! \n   2 -  Termina o café porque o chefe é prioridade`
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
      <h1>Beleza bro, Ta na hora de provar o seu valor !! VAMO QUE VAMO pra cima desses alienígenas horríveis!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../fase-2/fase-2.html">Clique aqui para continuar sendo o herói!</a>
      </div>
      <img class= "super" src="../images/super1.jpg" alt="super-heroi">
      <div>
      `
    );
  } else if (decisao === "2") {
    document.write(
      `<div class= "fase1">
      <h1>Nossa, se essa é a sua decisão tudo bem.</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o <br>início</a>
      </div>
      <img class= "super" src="../images/carinha-triste.jpg" alt="gameover">
      `
    );
  }
}
function gameOver() {
  document.write(`
  <div class='gameOver'>
    <p>Ta querendo bugar o meu game bro ?</p>
    <img class='gameOverImg' src="../../images/game-over-gif.gif" alt="Game Over">
    <a class="decidir botao" href="../../index.html">Clique aqui para voltar para a tela inicial</a>
  </div>  
  `);
}

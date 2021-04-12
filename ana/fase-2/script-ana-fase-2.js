let decisao = prompt(
  `1-Meus amigos não, seus vermes ! Pode saindo de perto deles ! \n 2- Eles nem são tão meus amigos assim, finge que nada aconteceu!   `
);
////Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      `1-Meus amigos não, seus vermes ! Pode saindo de perto deles ! \n 2- Eles nem são tão meus amigos assim, finge que nada aconteceu!   `
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
      <h1>Sei não hein, to começando a achar que você ta de hack! Quebrou tudo e fez o seu nome!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../fase-3/fase-3-ana.html">Clica aqui para acabar logo com essa ameaça!</a>
      </div>
      <img class= "super jim" src="../images/gif-fase2.gif" alt="super-heroi">
      <div>
      `
    );
  } else if (decisao === "2") {
    document.write(
      `<div class= "fase1">
      <h1>Nossa, quanta empatia com a Humanidade.. To vendo que me enganei sobre você</h1>
      <div class='decisao2'>
      <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o <br>início</a>
      </div>
      <img class= "super jim" src="../images/fase-2.jpg" alt="gameover">
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

let decisao = prompt(
  `1- Cai na porrada e mete uma surra nesses alienìgenas lixos ! \n  2 - Vai voltar pros papéis e passa a ter certeza que é covarde !`
);
////Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      `1- Cai na porrada e mete uma surra nesses alienìgenas lixos ! \n  2 - Vai voltar pros papéis e passa a ter certeza que é covarde !`
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
      <h1>Seus amigos ficaram muito gratos pela a ajuda que você deu a eles, eles disseram que você é a única que pode acabar com isso.</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../fase-3-maria/fase-3-maria.html">Clique aqui e prove a eles que eles não estão errados!</a>
      </div>
      <img class= "super" src="../images/gif-fase-2.gif" alt="super-heroi">
      <div>
      `
    );
  } else if (decisao === "2") {
    document.write(
      `<div class= "fase1">
      <h1>Eu já sabia que a sua mãe não tinha criado uma guerreira.</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o início</a>
      </div>
      <img class= "super" src="../images/gatinho-fase-2.jpg" alt="gameover">
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

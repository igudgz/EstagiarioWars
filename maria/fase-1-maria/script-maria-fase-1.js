let decisao = prompt(
  `1-  Está na hora da estagiária provar o seu lugar ! \n 2- Documentos do funcionários da empresa é mais importante!   `
);
//Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      `1-  Está na hora da estagiária provar o seu lugar ! \n 2- Documentos do funcionários da empresa é mais importante!   `
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
      <h1>E nas quartas... METEMOS A PORRADA EM ALIENS !</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../fase-2-maria/fase-2-maria.html">Clica aqui e vamo destruir umas bundas alienígenas ?! </a>
      </div>
      <img class= "super " src="../images/gif-fase-1.gif" alt="super-heroi">
      <div>
      `
    );
  } else if (decisao === "2") {
    document.write(
      `<div class= "fase1">
      <h1>Você não honra o nosso GIRL POWER!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o início</a>
      </div>
      <img class= "super" src="../images/gif-2-fase-1.gif" alt="gameover">
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

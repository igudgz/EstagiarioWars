let decisao = prompt(
  ` 1-Vamo que vamo que esse dai não da nem pra sujar a chuteira! \n 2-Duvido que eu vou enfrentar isso ai! Esse dai ta de hack! Fui!  `
);
//
//Validação de escolha
let tentativas = 0;
let maxTentativas = 2;
while (tentativas < maxTentativas) {
  if (decisao != "1" && decisao != "2") {
    decisao = prompt(
      ` 1-Vamo que vamo que esse dai não da nem pra sujar a chuteira! \n 2-Duvido que eu vou enfrentar isso ai! Esse dai ta de hack! Fui!  `
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
      <h1>Quem diria hein Maria, você, rainha dos papéis e coisas sem graça ganhando o titulo de destruídora de alienígenas nojentos! Parabéns por salvar o MUNDO!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../../index.html" ">Clique aqui para voltar para o início!</a>
      </div>
      <img class= "super" src="../images/gif-fase-3.gif" alt="super-heroi">
      <div>
      `
    );
  } else if (decisao === "2") {
    document.write(
      `<div class= "fase1">
      <h1>Chocado com o tamanho da sua covardia, depois de tudo achei que podia confiar em você!</h1>
      <div class='decisao2'>
        <a class="decidir botao" href="../../index.html">Clique aqui para voltar para o início.</a>
      </div>
      <img class= "super" src="../../joao/images/raiva.png" alt="gameover">
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

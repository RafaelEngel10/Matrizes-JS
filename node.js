const userAnswer = require('readline/promises');
const lineReader = userAnswer.createInterface ({
    input: process.stdin,
    output: process.stdout
});

const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function menu() {
  let option = "";
  let matriz = [];
  let linhas = 0;
  let colunas = 0;

  do {
    console.clear();
    console.log("===== Matrizes =====");
    console.log("1. Ler uma matriz   ");
    console.log("2. Mostrar matriz   ");
    console.log("3. Trocar um número ");
    console.log("4. Somar uma linha  ");
    console.log("5. Somar uma coluna ");
    console.log("6. Somar tudo       ");
    console.log("8. Sair             ");
    console.log("====================");

    option = await rl.question("Sua escolha: ");

    switch (parseInt(option)) {
      case 1:
        linhas = parseInt(await rl.question("Quantas linhas você quer? "));
        colunas = parseInt(await rl.question("Quantas colunas você quer? "));

        matriz = [];

        for (let i = 0; i < linhas; i++) {
          matriz[i] = [];
          for (let j = 0; j < colunas; j++) {
            const valor = parseFloat(await rl.question(`Elemento [${i + 1}, ${j + 1}]: `));
            matriz[i][j] = valor;
          }
        }

        console.log("Matriz lida com sucesso!");
        await rl.question("Pressione Enter para continuar...");
        break;

      case 2:
        if (!matriz.length) {
          console.log("Nenhuma matriz foi carregada ainda.");
        } else {
          console.log("Matriz atual:");
          console.table(matriz);
        }
        await rl.question("Pressione Enter para continuar...");
        break;

      case 8:
        console.log("Saindo...");
        return 0;

      default:
        console.log("Opção inválida.");
        break;
    }

  } while (parseInt(option) !== 8);

  rl.close();
}

menu();
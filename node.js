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

      case 3:
        if (!matriz[linhas]) 
            matriz[linhas] = [];

        linhas = parseInt(await rl.question("Qual a linha do valor? "));
        colunas = parseInt(await rl.question("Qual a coluna do valor? "));

        matriz[linhas][colunas] = parseFloat(await rl.question("Qual o novo valor a ser adicionado? "));
        break;

      case 4:
        let acm = 0;
        const j = await rl.question("Qual linha que você quer somar? ");
        for (i=0;i<colunas;i++) {
            acm = acm + matriz[j][i];
        }
        console.log("A soma das colunas da linha " + linhas + " é igual a: " + acm);
        break;

      case 5:
        let acum = 0;
        const i = await rl.question("Qual a coluna que você quer somar? ");
        for (let j=0;j<linhas;j++) {
            acum = acum + matriz[j][i];
        }
        console.log("A soma das linhas da coluna " + colunas + " é igual a: " + acum);
        break;

      case 6: 
        let acumulador = 0;
        for (let i=0;i<linhas;i++) {
            for (let j=0;j<colunas;j++) {
                acumulador = acumulador + matriz[i][j];
            }
        }
        console.log("A soma de todos os valores da matriz é igual a: " + acumulador);
        break;

      case 8:
        console.log("Saindo...");
        option = 8;
        break;

      default:
        console.log("Opção inválida.");
        break;
    }

  } while (parseInt(option) !== 8);

  rl.close();
}

menu();
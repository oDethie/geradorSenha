const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ç'];

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = [',', '.', ';', '-', '_', '$', '*', '(', ')', '&', '#', '@', ':', '/', '!', '?'];

const letrasUpper = letras.map(letra => letra.toUpperCase());

export default function calculaAleatorio(booleanCheck, length) {
  let i=0;
  let modelaVetor = criaVetor(booleanCheck);
  let senhaGerada = [];
  let posAlet = 0;
  let posAletDois = 0;
  while(i < length){
    posAlet = geraPosicao(modelaVetor.length);
    posAletDois = geraPosicao(modelaVetor[posAlet].length);
    senhaGerada[i] = modelaVetor[posAlet][posAletDois];
    i++;
  }
  i=0;
  return senhaGerada.join().replace(/[,]+/g, "");
}

function criaVetor(booleanCheck){
  let indiceVetor = 0;
  let modelaVetor = [];
  booleanCheck.forEach((validacao, index, array) => {
    if(validacao === true) {
      switch(index) {
        case 0:
          modelaVetor[indiceVetor++] = letras.slice();
          break;
  
        case 1:
          modelaVetor[indiceVetor++] = letrasUpper.slice();
          break;
  
        case 2:
          modelaVetor[indiceVetor++] = num.slice();
          break;
  
        case 3:
          modelaVetor[indiceVetor++] = symbols.slice();
          break;
      }
    }
  })
  return modelaVetor;
}

function geraPosicao(tam) {
  tam--;
  return Math.round(Math.random() * tam);
}
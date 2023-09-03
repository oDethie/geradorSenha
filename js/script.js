import calculaAleatorio from "./modules/calculaAleatorio.js";

class Inputs {
  constructor(elemento) {
    this.elemento = elemento;
  }

  buscarElemento() {
    return document.querySelector(`${this.elemento}`);
  }

  buscarElementos() {
    return document.querySelectorAll(this.elemento);
  }
}

const inputConfig = Array.from(
  new Inputs('[data-input="info"]').buscarElementos()
);
const botao = new Inputs('[data-input="button"]').buscarElemento();
const length = new Inputs('[data-input="length"]').buscarElemento();
const display = new Inputs('[data-input="display"]').buscarElemento();

botao.addEventListener("click", (event) => {
  event.preventDefault();
  botao.classList.remove("erro");
  if(document.querySelector('.erroSpan')) botao.parentElement.removeChild(document.querySelector('.erroSpan'));
  
  if (length.value > 20 || length.value < 6) {
    throwErro();
  }

  const senhaGerada = verificaConfig();
  display.value = senhaGerada;
});

const verificaConfig = () => {
  const resgataCheck = inputConfig.map((input) => input.checked);
  const verificaNulo = inputConfig.filter((input) => input.checked === false);

  if (verificaNulo.length === 4) throwErro();
  else {
    const senhaGerada = calculaAleatorio(resgataCheck, length.value);
    return senhaGerada;
  }
};

const throwErro = () => {
  botao.classList.add("erro");
  display.value = '';

  const paiBotao = botao.parentElement;

  const spanErro = document.createElement('span');
  spanErro.classList.add('erroSpan');
  spanErro.textContent = "Valor inválido!";
  paiBotao.appendChild(spanErro);

  throw new Error("Valor inválido");
};

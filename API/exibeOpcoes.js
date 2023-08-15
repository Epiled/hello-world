import traduzirTexto from "./metodoTraduzir.js";
import { conectaApi } from "./conectaBandeiras.js";

const bandeiras = document.querySelector('[data-bandeiras]');
const bandeirasOpcoes = document.querySelector('[data-bandeiras-opcoes]');
const opcoesOrdenadas = ordemAlfabetica(await conectaApi.listaPaises());
const bandeiraSelecionada = document.querySelector('[data-bandeira-selecionada]');


bandeiras.addEventListener('click', () => {
  bandeiraSelecionada.children[0].classList.toggle('bandeira__selecionada--ativo')
  bandeirasOpcoes.classList.toggle('bandeira__opcoes--ativo');
});

function exibiOpcoes(opcoes) {

  opcoes.forEach(opcao => {
    const item = criaOpcao(opcao);
    bandeirasOpcoes.appendChild(item);
  });
}

function criaOpcao(opcao) {
  const item = document.createElement('div');
  item.classList.add('bandeira');
  item.dataset.sigla = `${opcao.sigla}`;
  item.innerHTML = `
  <img class="bandeira__imagem" width="25" height="25" src="./assets/images/bandeiras/${opcao.bandeira}" alt="Bandeira - ${opcao.nome}">
  <span class="bandeira__lingua" data-bandeira-pais="${opcao.nome}">${opcao.lingua}</span>
  `
  adicionaEventoClick(item);

  return item;
}

function adicionaEventoClick(elemento) {
  const item = elemento;
  item.addEventListener('click', (e) => {
    const selecionada = e.currentTarget.cloneNode(true);
    selecionada.classList.add('bandeira__selecionada');
    bandeiraSelecionada.innerHTML = '',
    bandeiraSelecionada.appendChild(selecionada);
    console.log(item);
    traduzirTexto(item.dataset.sigla);
  });

  return item;
}

exibiOpcoes(opcoesOrdenadas);
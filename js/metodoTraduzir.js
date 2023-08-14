import { conectaApi } from "./conectaApi.js";

const seletor = document.querySelector('select');
const localTxt = document.querySelector('[data-hello-word]');
let teste;

seletor.addEventListener('change', async () => {
  console.log(localTxt.value);
  try {
    const res = await conectaApi.buscaTraducao(localTxt.value, seletor.value);
    localTxt.value = await res.data.translations[0].translatedText;
  } catch (erro) {
    console.log(erro);
  }

  console.log(seletor.value + " Hello");
});
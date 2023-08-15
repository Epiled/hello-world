import { conectaApi } from "./conectaApi.js";

const localTxt = document.querySelector('[data-hello-word]');

async function traduzirTexto(lingua) {
  try {
    const res = await conectaApi.buscaTraducao(localTxt.value, lingua);
    console.log(res);
    localTxt.value = await res.data.translations[0].translatedText;
  } catch (erro) {
    console.log(erro);
  }
}

export default traduzirTexto;
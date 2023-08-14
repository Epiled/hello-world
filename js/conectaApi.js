const apiKey = 'AIzaSyDW-HXqhJToIsAoLnvfExAO9dWQFaxYxAg';

async function buscaTraducao(texto, lingua) {
  const conexao = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${encodeURIComponent(texto)}&target=${lingua}`
  );
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const conectaApi = {
  buscaTraducao,
}
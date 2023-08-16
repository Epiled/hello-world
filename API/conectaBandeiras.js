// const endpointDaApi = 'http://localhost:3000/paises';
const endpointDaApi = 'https://epiled.github.io/hello-world/API/dadosBandeiras.json';

async function listaPaises() {
  const conexao = await fetch(endpointDaApi);
  const bandeiraLista = await conexao.json();
  console.table(bandeiraLista);
  return bandeiraLista;
}

export const conectaApi = {
  listaPaises,
}
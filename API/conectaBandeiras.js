const endpointDaApi = 'http://localhost:3000/paises';

async function listaPaises() {
  const conexao = await fetch(endpointDaApi);
  const bandeiraLista = await conexao.json();
  console.table(bandeiraLista);
  return bandeiraLista;
}

export const conectaApi = {
  listaPaises,
}
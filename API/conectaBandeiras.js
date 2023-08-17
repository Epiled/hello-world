/*
Caso queira rodar localmente descomente as linhas 3 e 11 
Comente as linhas 15 e 7;
*/

// const endpointDaApi = 'http://localhost:3000/paises';
const endpointDaApi = 'https://epiled.github.io/hello-world/API/dadosBandeiras.json';

async function listaPaises() {
  const conexao = await fetch(endpointDaApi);
  const bandeiraLista = await conexao.json();
  // console.table(bandeiraLista);
  console.table(bandeiraLista.paises);
  // return bandeiraLista;
  return bandeiraLista.paises;
}

export const conectaApi = {
  listaPaises,
}
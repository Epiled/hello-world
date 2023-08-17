function ordemAlfabetica(itens) {
  console.log(itens);
  let ordenados = itens.sort((a, b) => {
    if (a.lingua < b.lingua) {
      return -1;
    } else if (a.lingua > b.lingua) {
      return 1;
    } else {
      return 0;
    }
  });

  return ordenados;
}
function encontrarMaiorEMenor(lista) {
    if (lista.length !== 10) {
      return "A lista deve conter exatamente 10 números.";
    }
  
    let maior = lista[0];
    let menor = lista[0];
  
    for (let numero of lista) {
      if (numero > maior) {
        maior = numero; 
      }
      if (numero < menor) {
        menor = numero; 
      }
    }
  
    return {
      maior: maior,
      menor: menor
    };
  }
  
  const numeros = [12, 45, 3, 67, 29, 81, 54, 2, 90, 10];
  const resultado = encontrarMaiorEMenor(numeros);
  console.log(`Maior valor: ${resultado.maior}, Menor valor: ${resultado.menor}`);
  
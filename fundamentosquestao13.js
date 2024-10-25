function somaCubos(lista) {
   
    const total = lista.reduce((soma, numero) => soma + Math.pow(numero, 3), 0);
    return total;
  }
  const numeros = [1, 2, 3, 4]; 
  const resultado = somaCubos(numeros);
  console.log(`A soma dos cubos é: ${resultado}`); 
  
function ordenarNumeros(lista) {
    
    return lista.sort((a, b) => a - b);
  }
  
  const numeros = [42, 5, 23, 89, 12, 3];
  const numerosOrdenados = ordenarNumeros(numeros);
  
  console.log(`Lista original: ${numeros}`);
  console.log(`Lista ordenada: ${numerosOrdenados}`);
  
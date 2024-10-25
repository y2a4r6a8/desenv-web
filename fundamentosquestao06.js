function encontrarMaisFrequente(numeros) {
    const contagem = {};
  
   
    for (const numero of numeros) {
      contagem[numero] = (contagem[numero] || 0) + 1;
    }
  
  
    let maisFrequente = null;
    let maiorContagem = 0;
  
    for (const numero in contagem) {
      if (contagem[numero] > maiorContagem) {
        maisFrequente = Number(numero);
        maiorContagem = contagem[numero];
      }
    }
  
    return maisFrequente;
  }
  
  
  const array = [1, 3, 2, 3, 4, 3, 5, 2, 2, 3];
  console.log(`O número mais frequente é: ${encontrarMaisFrequente(array)}`);
  
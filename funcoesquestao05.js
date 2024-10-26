function encontrarMaiorPalavra(frase) {
    const palavras = frase.split(' ');
    
    let maiorPalavra = '';
  
    for (let palavra of palavras) {
      
      const palavraLimpa = palavra.replace(/[.,?!;:]/g, '');
      if (palavraLimpa.length > maiorPalavra.length) {
        maiorPalavra = palavraLimpa;
      }
    }
  
    return maiorPalavra;
  }
  
  const frase = "Hoje é um dia ensolarado e lindo!";
  const resultado = encontrarMaiorPalavra(frase);
  console.log(`A maior palavra é: "${resultado}"`);
  
function somaTamanhosPalavras(frase) {
   
    return frase.split(" ").reduce((soma, palavra) => soma + palavra.length, 0);
  }
  
  const frase = "Calcule a soma dos tamanhos de todas as palavras";
  console.log(`A soma dos tamanhos das palavras é: ${somaTamanhosPalavras(frase)}`);
  
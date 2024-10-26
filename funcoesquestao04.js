function verificarPresenca(frase, palavra) {
    const fraseMinuscula = frase.toLowerCase();
    const palavraMinuscula = palavra.toLowerCase();
  
    const presente = fraseMinuscula.includes(palavraMinuscula);
  
    return presente ? "A palavra está presente na frase." : "A palavra não está presente na frase.";
  }
  
  const frase = "Hoje é um dia ensolarado.";
  const palavra = "dia";
  const resultado = verificarPresenca(frase, palavra);
  console.log(resultado); 
  
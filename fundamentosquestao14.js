function verificarPalavra(frase, palavra) {
    
    return frase.includes(palavra);
  }
  
  const frase = "O sol brilha intensamente no céu azul.";
  const palavra = "brilha";
  const resultado = verificarPalavra(frase, palavra);
  
  if (resultado) {
    console.log(`A palavra "${palavra}" está presente na frase.`);
  } else {
    console.log(`A palavra "${palavra}" não está presente na frase.`);
  }
  
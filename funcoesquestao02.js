function contarVogaisEConsoantes(frase) {
    const vogais = "aeiouAEIOU";
    let contadorVogais = 0;
    let contadorConsoantes = 0;
  
    for (let char of frase) {
      
      if (char.match(/[a-zA-Z]/)) {
        if (vogais.includes(char)) {
          contadorVogais++; 
        } else {
          contadorConsoantes++; 
        }
      }
    }
  
    return {
      vogais: contadorVogais,
      consoantes: contadorConsoantes
    };
  }
  
  const frase = "Olá, tudo bem com você!";
  const resultado = contarVogaisEConsoantes(frase);
  console.log(`Vogais: ${resultado.vogais}, Consoantes: ${resultado.consoantes}`);
  
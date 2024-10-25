function converterNome(nomeCompleto) {
    
    const partesNome = nomeCompleto.split(" ");
  
   
    const primeiroNome = partesNome[0];
    const sobrenomes = partesNome.slice(1);
  
  
    const iniciaisSobrenomes = sobrenomes.map(sobrenome => sobrenome[0] + ".").join(" ");
  
    
    return `${iniciaisSobrenomes} ${primeiroNome}`;
  }
  
 
  const nome = "Alan Mathison Turing";
  console.log(converterNome(nome));  
  
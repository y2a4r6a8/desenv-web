function inverterNumero(num) {
   
    const numeroInvertido = Number(num.toString().split('').reverse().join(''));
    return numeroInvertido;
  }
  
  const numero = 12356;
  const resultado = inverterNumero(numero);
  console.log(`Número invertido: ${resultado}`); 
  
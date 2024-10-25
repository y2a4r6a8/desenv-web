function compararNumeros(num1, num2) {
    if (num1 > num2) {
      return `${num1} é maior que ${num2}.`;
    } else if (num1 < num2) {
      return `${num2} é maior que ${num1}.`;
    } else {
      return `Os números são iguais.`;
    }
  }
  
  const numero1 = 15;
  const numero2 = 25;
  console.log(compararNumeros(numero1, numero2)); 
  
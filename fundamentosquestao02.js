function calcularAreaTriangulo(lados) {
    
    const [a, b, c] = lados;
  
   
    const s = (a + b + c) / 2;
  
    
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
    return area;
  }
  
 
  const lados = [5, 6, 7];  
  const area = calcularAreaTriangulo(lados);
  console.log(`A área do triângulo é: ${area}`);
  
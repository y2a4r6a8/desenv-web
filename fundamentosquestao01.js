function exibirDataHora() {
    const dataAtual = new Date();
  
    // Array com os nomes dos dias da semana
    const diasDaSemana = [
      'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
      'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
  
    // Obtendo o dia da semana
    const diaSemana = diasDaSemana[dataAtual.getDay()];
  
    // Formatando a hora atual em HH:MM:SS
    const horas = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    const segundos = String(dataAtual.getSeconds()).padStart(2, '0');
    const horaAtual = `${horas}:${minutos}:${segundos}`;
  
    // Exibindo o resultado no console
    console.log(`Hoje é: ${diaSemana}.`);
    console.log(`A hora atual é: ${horaAtual}.`);
  }
  
  // Chama a função para exibir a data e hora
  exibirDataHora();
  
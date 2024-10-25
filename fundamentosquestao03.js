function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  
  function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  
  const temperaturaCelsius = 25; 
  const temperaturaFahrenheit = 77; 
  
  console.log(`${temperaturaCelsius}°C em Fahrenheit é: ${celsiusParaFahrenheit(temperaturaCelsius)}°F`);
  console.log(`${temperaturaFahrenheit}°F em Celsius é: ${fahrenheitParaCelsius(temperaturaFahrenheit).toFixed(2)}°C`);
  
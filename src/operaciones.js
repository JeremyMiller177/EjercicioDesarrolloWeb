
const suma = (a, b) => {
    return a + b;
  };
  
 
  const resta = (a, b) => {
    return a - b;
  };
  
 
  const multiplicacion = (a, b) => {
    return a * b;
  };
  
  const division = (a, b) => {
    if (b === 0) {
      return ;
    }
    return a / b;
  };
  
  
  const modulo = (a, b) => {
    if (b === 0) {
      return ;
    }
    return a % b;
  };
  
  
  module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    modulo,
  };
  
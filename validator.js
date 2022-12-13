const validator = {
  isValid: (cardNumber) => {
    //manipular el numero de la tarjeta de credito y procesarlo con las validaciones requeridas
    //
    const cardAsArray = Array.from(cardNumber, Number).reverse();
    const result = [];

    //recibir la tarjeta de credito y recorrer (iterar con un ciclo 'for') todos los caracteres recibidos
    for (let position = 0; position < cardAsArray.length; position++) {
      if (position % 2 !== 0) {
        //si la posicion position es par, doblar el número de la tarjeta en esa posicion
        // guardamos en la variable doubledNumber
        const doubledNumber = cardAsArray[position] * 2;
        if (doubledNumber > 9) {
          result.push(doubledNumber - 9);
        } else {
          result.push(doubledNumber);
        }
      } else {
        result.push(cardAsArray[position]);
      }
    }
    let totalSum = 0;
    for (let position = 0; position < result.length; position++) {
      totalSum = totalSum + result[position];
    }
    console.log({ cardAsArray, totalSum, result });
    if (totalSum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: (cardNumber) => {
    return cardNumber.slice(0, -4).replace(/./g, "#") + cardNumber.slice(-4);
  },
};
export default validator;

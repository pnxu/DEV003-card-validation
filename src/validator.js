const validator = {
  isValid: (cardNumber) => {
    const cardAsArray = Array.from(cardNumber, Number).reverse();
    const result = [];
    let totalSum = 0;

    for (let position = 0; position < cardAsArray.length; position++) {
      const doubledNumber = cardAsArray[position] * 2;
      if (position % 2 === 0) result.push(cardAsArray[position]);
      else if (doubledNumber > 9) result.push(doubledNumber - 9);
      else result.push(doubledNumber);
    }
    for (let position = 0; position < result.length; position++) {
      totalSum = totalSum + result[position];
    }
    return totalSum % 10 === 0 ? true : false;
  },

  maskify: (cardNumber) => {
    return cardNumber.slice(0, -4).replace(/./g, "#") + cardNumber.slice(-4);
  },
};
export default validator;

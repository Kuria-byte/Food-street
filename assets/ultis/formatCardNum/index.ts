const formatCardNum = (cardNumber: string) => {
  const input = cardNumber.replace(/\D/g, '');
  const cardNum = input.substring(0, 16);
  let lastCardNum = '';
  if (cardNum.length < 5) {
    lastCardNum = cardNum;
  } else {
    if (cardNum.length < 9) {
      lastCardNum = cardNum.substring(0, 4) + '  ' + cardNum.substring(4, 8);
    } else {
      if (cardNum.length < 13) {
        lastCardNum =
          cardNum.substring(0, 4) +
          '  ' +
          cardNum.substring(4, 8) +
          '  ' +
          cardNum.substring(8, 12);
      } else {
        lastCardNum =
          cardNum.substring(0, 4) +
          '  ' +
          cardNum.substring(4, 8) +
          '  ' +
          cardNum.substring(8, 12) +
          '  ' +
          cardNum.substring(12, 16);
      }
    }
  }
  return lastCardNum;
};

export default formatCardNum;

const convertCardNumber = (input: string) => {
  const cardNumber = input.replace(/\D/g, '');

  // Trim the remaining input to ten characters, to preserve phone number format
  const cardNum = cardNumber.substring(0, 16);
  let output = '';
  if (cardNum.length < 16) {
    const numOfSpace = 16 - cardNum.length;
    output = cardNum + '#'.repeat(numOfSpace);
  } else {
    output = cardNum;
  }
  return output;
};

export default convertCardNumber;

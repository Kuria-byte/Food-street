const formatPhoneNumber = (phoneNumber: string) => {
  // setTimeout(() => {
  const input = phoneNumber.replace(/\D/g, '');

  // Trim the remaining input to ten characters, to preserve phone number format
  const phoneNum = input.substring(0, 10);
  let lastPhoneNum = '';
  if (phoneNum.length < 4) {
    lastPhoneNum = phoneNum;
  } else {
    if (phoneNum.length < 7) {
      lastPhoneNum = phoneNum.substring(0, 3) + '-' + phoneNum.substring(3, 6);
    } else {
      lastPhoneNum =
        phoneNum.substring(0, 3) +
        '-' +
        phoneNum.substring(3, 6) +
        '-' +
        phoneNum.substring(6, 10);
    }
  }
  return lastPhoneNum;
  // }, 300);
};
export default formatPhoneNumber;

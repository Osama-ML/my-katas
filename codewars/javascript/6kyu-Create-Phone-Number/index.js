function createPhoneNumber(numbers) {
  let phoneNum = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    phoneNum = phoneNum.replace("x", numbers[i]);
  }
  return phoneNum;
}

function writeCards(names, greetingType) {
  const thankYouArr = [];
  names.forEach((name) => {
    thankYouArr.push(`Thank you, ${name}, for the wonderful ${greetingType} gift!`)
  })
  return thankYouArr;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
// This array shuffle method is implemented using the Fisher Yates Modern shuffle algorithm
const shuffleList = (list) => {
  let arrayLength = list.length;
  for(let i = arrayLength; i > 0; i--) {
    let temp = list[i-1];
    let randomNumber = Math.floor(Math.random() * i);
    list[i-1] = list[randomNumber];
    list[randomNumber] = temp
  }
  return list;
};

export default shuffleList;

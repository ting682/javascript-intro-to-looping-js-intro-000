function forLoop(array){
  for (let i = 0; i < 25; i++) {
    //if (i<10){
      //n = i + 1;
      array[i] = `I am 1 strange loop${i === 0 ? '': 's'}.`;
    //  else {

    //      array[i] = `I am 1 strange loop.`
    //  }
    //}
  }
  return array;
}

function forLoop(array){
  for (let i = 0; i < 25; i++) {

      //n = i + 1;
      array[i] = `I am 1 strange loop${i === 1 ? '': 's'}.`;
    //  else {

    //      array[i] = `I am 1 strange loop.`
    //  }
    //}
  }
  return array;
}

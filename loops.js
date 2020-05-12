function forLoop(array){
  for (let i = 0; i < 25; i++) {

      //n = i + 1;
      array[i] = `I am ${i} strange loop${i===0 ? '':'s'}.`
      console.log(array[i]);
  }
  return array;
}

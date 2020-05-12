function forLoop(array){
  for (let i = 0; i < 25; i++) {
    array[i] = `I am ${i+1} strange loop${i === 0 ? '': 's'}.`;

  }
  return array;
}

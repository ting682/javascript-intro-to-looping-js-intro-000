function forLoop(array){
  for (var i = 0; i < array.length; i++) {
    return array[i] = `I am ${i} strange loop${i === 0 ? '': 's'}.`;
  }

}

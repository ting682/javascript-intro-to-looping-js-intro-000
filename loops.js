function forLoop(array){
  for (let i = 0; i < 25; i++) {

      var n = i + 1;
      array[i] = `I am ${n} strange loop${i===0 ? '':'s'}.`
      console.log(array[i]);
  }
  return array;
}
function whileLoop(n){
  while(n>0){
    n--;
  }
  return n;
}

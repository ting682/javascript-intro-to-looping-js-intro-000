function forLoop(array){
  for (let i = 0; i < 25; i++) {

      if(i>11){
        var n = i + 1;
        array[i] = `I am ${n} strange loop${i===0 ? '':'s'}.`
        console.log(array[i]);
      }
      else{
        
        array[i] = `I am 1 strange loop.`
      }
  }
  return array;
}
function whileLoop(n){
  while(n>0){
    n--;
    console.log(n);
  }
  return "done";
}
function doWhileLoop(num){
  do{
    console.log("I run once regardless");
    num--;
  }while(num>0)
}

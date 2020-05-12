function forLoop(array){
  for (let i = 0; i < array.length; i++) {
    console.log(array.length);
    var n = i

    array[i] = `I am ${n + 1} strange loop${n === 0 ? '':'s'}.`
    console.log(array[n]);
    if(array.length > 10){
      n = 0
    }

    //array[11] = `I am 1 strange loop`;
    //array[34] = `I am 24 strange loops.`;

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

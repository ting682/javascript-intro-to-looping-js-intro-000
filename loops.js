function forLoop(array){
  for (let i = 0; i < array.length; i++) {
    var n = i
    array[n] = `I am ${n} strange loop${n ===0 ? '':'s'}.`
    console.log(array[i]);
    if(array.length > 25){
      i = 0
    }
//    if (array.length > 25){
//      for(let j = 0; j<25; j++){
//        array[j] = `I am ${i} strange loop${i ===0 ? '':'s'}.`
//      }

    //}
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

function forLoop(array){
  for (let i = 0; i < 10; i++) {
    var n = i

    array[i] = `I am ${i} strange loop${i === 0 ? '':'s'}.`
    console.log(array[i]);

    //array[11] = `I am 1 strange loop`;
    //array[34] = `I am 24 strange loops.`;

  }
  for (let i = 10; i<20; i++){
    var j = 1
    array[i] = `I am ${j} strange loop${j === 1 ? '':'s'}.`
    j++;
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

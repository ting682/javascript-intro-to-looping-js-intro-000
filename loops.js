function forLoop(array){
  for (let i = 0; i < 10; i++) {
    //var n = i

    array[i] = `I am ${i} strange loop${i === 0 ? '':'s'}.`
    console.log(array[i]);

    //array[11] = `I am 1 strange loop`;
    //array[34] = `I am 24 strange loops.`;

  }
  for (let j = 10; j<25; j++){
    var k = 1
    k = k + 1;
    array[j] = `I am ${k} strange loop${k === 1 ? '':'s'}.`
    console.log(array[j])
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

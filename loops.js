function forLoop(array){
  for (let i = 0; i < 25; i++) {
    array[i] = `I am ${i} strange loop${i ===0 ? '':'s'}.`
    console.log(array[i]);
  }
  return "done";
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

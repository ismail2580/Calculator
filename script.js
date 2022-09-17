let inputfild = document.getElementById("myResult")

function deleted(){
  inputfild.value = ''
}
function calclutor(finalAnswer){
  inputfild.value += finalAnswer
}
function backSpace(){
  inputfild.value = inputfild.value.slice(0, -1)
}
function finalResult() {
  let a = inputfild.value;
  let b = eval(a)
  inputfild.value = b;
}

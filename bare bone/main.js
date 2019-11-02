function insert(value){
  document.getElementById("textview").value = document.getElementById("textview").value+value;
}

function calculate(){
  let str = document.getElementById("textview").value;
  if(str){
    document.getElementById("textview").value = eval(str);
  }
}

function delChar(){
  let str = document.getElementById("textview").value;
  document.getElementById("textview").value = str.substring(0, str.length-1);
}

function delAll(){
  document.getElementById("textview").value = "";
}

var acceptepleChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '(', ')', '%'];

function isCharAccepteble(char){
  acceptepleChars.forEach((element) => {
    if(char == element){
      return true;
    }
  })
  return false;
}

document.addEventListener('keydown', function(event) {
  if(isCharAccepteble(event.key)) {
    insert(event.key);
  }
  console.log(event.key)
});
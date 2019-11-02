function insert(value){
  document.getElementById("textview").value = document.getElementById("textview").value+value;
}

function calculate(){
  let str = document.getElementById("textview").value;
  let i;
  for (i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
  }
}
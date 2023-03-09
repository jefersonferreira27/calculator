//Inserior os números da calculadora//
function insert(num){
   let number = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = number+num;
}   

//Limpar os números da calculadora//
function clean(){
   let result = document.getElementById('result');
   result.innerHTML = '';
}




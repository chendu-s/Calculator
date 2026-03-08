let input=document.querySelector('input');
function Addvalue(number){
    input.value += number
}
function clearval(){
    input.value=" "
}
function del(){
    input.value=input.value.slice(0,input.value.length-1)
}
function equal(){
    input.value=eval(input.value)
}
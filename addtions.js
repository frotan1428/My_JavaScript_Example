
var num=parseInt(prompt("Enter Number 1 plase"));
var num2=parseInt(prompt("Enter Number2 plase"));
function add(num,num2){
        return num+num2; 
}
alert(add(num,num2));
document.getElementById("demo").innerHTML =add(num,num2);
var database =[
    {
        username:"frotan",
        password:"mojib1427"
    }

];

var newsFeed=[

    {
        username:"hafasa",
        timeline:"I love you frotan"
    },
    {
        username:"ozma",
        timeline:"I am baby"
    }

];
 var userName=prompt("Enter Yor Username");
 var userpass=prompt("Enter Your password");
  
 function signIN(user,pass){
        if(user===database[0].username 
            && pass===database[0].password){
            alert("Hi mr "+userName +" "+ "welcom! ");
        }else{
            alert("Sory Username and password are incorecct");
        }
 }
 signIN(userName,userpass);



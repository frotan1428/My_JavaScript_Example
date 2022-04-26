//conditons? exp1:exp2

 function isValid(bool){
        return bool;
 }
 var answer=isValid(true)? "You may Enter": "acces deinied";

 function conditons(){
     if (isValid(false)) {
         return  "You may Enter";
         
     }else{
        return "Acces Denid";
     }
 }
 var answer2=conditons();
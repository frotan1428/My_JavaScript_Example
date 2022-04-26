function Calculation(calculation){
        var cal;
        var a=parseInt(prompt("Enter a Intger a:"));
        var b=parseInt(prompt("Enter a Intger a:"));
        switch (calculation) {
            case 1:
                cal=a+b;
                break;
            case 2:
                cal=a-b;
                break;
             case 3:
                cal=a*b;
                break;

             case 4:
                if (a>b) {
                    cal=a/b;
                }else{
                    cal="A mus be Greater Than b"
                }
                break;
        
            default:
                cal="Invalid Calucaltions"
                break;
        }
        return cal;
}

function daysOfTheWeek(day){
    var days;
    switch (day) {
        case 1:
            days= "Satudrady"
            break;
            case 2:
            days="sunday"
            break;
            case 3:
            days="Monady"
            break;
            case 4:
            days="wendsday"
            break;
            case 5:
            days="Thuesday"
            break;
            case 6:
            days="Thursday"
            break;
            case 7:
            days="Friday"
            break;
    
        default:
            days="Out of Range Days :Please Enter A number between 1-7"
            break;
    }
   return days;
}
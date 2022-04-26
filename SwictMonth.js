function MonthsOfTheYear(month){
    var month_year;

    switch (month) {
    
        case 1: 
            month_year="January"
            break;
        case 2: 
            month_year="Febuary"
            break;
        case 3: 
            month_year="march"
            break;
        case 4: 
            month_year="April"
            break;
        case 5: 
            month_year="May"
            break;
        case 6: 
            month_year="Jun"
            break;
        case 7: 
            month_year="July"
            break;
        case 8: 
            month_year="Aguest"
            break;
        case 9: 
            month_year="september"
            break;
        case 10: 
            month_year="October"
            break;
        case 11: 
            month_year="Novemer"
            break;
        case 12: 
            month_year="December"
            break;
        default:
        month_year="Enter Month_range between 1-12:"
            
    }
    return month_year;

}
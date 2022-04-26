function moveCommnend(direction){
    var whathappen;
    switch (direction) {
        case "farward": 
        whathappen="You Enter the Monester";
            break;
            case "back": 
        whathappen="You arive the Home";
            break;
            case "left": 
        whathappen="You see the River";
            break;
            case "right": 
        whathappen="You Enter the rull";
            break;
    
        default:
            whathappen="You Enter The Valid Ddirection";
            break;
    }
    return whathappen;

}
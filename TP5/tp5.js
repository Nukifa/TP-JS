function abs(numbers){
    let tab = []
    let i = 0;
    numbers.forEach( function(number){
        if(number < 0){
            tab[i] = number * (-1);
            i++;
        }
        else{
            tab[i] = number;
            i++;
        }
    }
    );
    return tab;
}

function evenOnly(numbers){
    let tab = [];
    let i = 0;
    numbers.forEach( function(number){
        if(number%2===0){
            tab[i] = number;
            i++;
        }
        }
    );
    return tab;
}

function sum(){

}
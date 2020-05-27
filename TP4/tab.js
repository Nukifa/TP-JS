function sum(numbers){
    let sum = 0;
    for(let number of numbers){
        sum = sum + number;
    }
    return sum;
}

function longestWord(words){
    let longestWord = words[0];
    for(let word of words){
        if(longestWord.length < word.length){
            longestWord = word;
        }
    }
    return longestWord;
}

function range(min, max, step){
    let tab = [min];
    let lastValue = min;
    let i = 1;
    while(lastValue + step <= max ){
        lastValue += step;
        tab[i] = lastValue;
        i++;
    }
    return tab;
}

function nbOccurences(wordList, word){
    
}
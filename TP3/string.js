function repeat(s, n){
    return s.repeat(n);
}

function truncate(s,n){
    if(s.length <= n){
        return s;
    }
    else{
        return s.substring(0, n-3) + "..."
    }
}

function isPalindrome(s){
    let size = s.length-1;
    for(let i=0; i<(size/2); i++){
        if(s[i]!=s[size-i]){
            return false;
        }
    }
    return true;
}

function swapCase(s){
    let result = "";
    for(let i=0; i<s.length; i++){
        if(s[i] === s[i].toUpperCase()){
            result = result + s[i].toLowerCase();
        }
        else{
            result = result + s[i].toUpperCase();
        }
    }
    return result;
}
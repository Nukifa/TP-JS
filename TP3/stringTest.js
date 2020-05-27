function repeatTests(){
    console.log(repeat("foo", 3)); // => foofoofoo
    console.log(repeat("faa", 2));
}

function truncateTest(){
    console.log(truncate("unchanged text", 20)); // => unchanged text
    console.log(truncate("unchanged text", 14)); // => unchanged text
    console.log(truncate("truncated text", 10)); // => truncat...
}

function isPalindromeTest(){
    console.log(isPalindrome("bonjour")); // => false
    console.log(isPalindrome("toto")); // => false
    console.log(isPalindrome("kayak")); // => true
    console.log(isPalindrome("ressasser")); // => true
    console.log(isPalindrome("selles")); // => true
}

function swapCaseTest(){
    console.log(swapCase("HELLO")); // => hello
    console.log(swapCase("bye")); // => BYE
    console.log(swapCase("GooD NighT")); // => gOOd nIGHt
}
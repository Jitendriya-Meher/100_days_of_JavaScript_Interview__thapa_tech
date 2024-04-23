
function isUpperCase(ch){
    if( ch[0]>='A' && ch[0]<='Z' ){
        return true;
    }
    else{
        return false;
    }
}

function isUpperCase2(ch){
    return ch == ch.toUpperCase();
}

console.log(isUpperCase("s"));
console.log(isUpperCase("s"));
console.log(isUpperCase("A"));
console.log(isUpperCase("B"));

console.log(isUpperCase2("s"));
console.log(isUpperCase2("s"));
console.log(isUpperCase2("A"));
console.log(isUpperCase2("B"));
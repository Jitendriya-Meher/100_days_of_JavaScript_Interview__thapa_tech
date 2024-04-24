
function truncateString(str,count) {
    if(count<0){
        return str;
    }
    if( str.length > count){
        return str.slice(0,count).concat("...");
    }
    return str;
}

console.log(truncateString("abcdefghijklmnopqrstuvwxyz",8));
console.log(truncateString("abcdefghijklmnopqrstuvwxyz",30));
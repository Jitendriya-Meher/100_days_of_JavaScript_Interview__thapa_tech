
function repeatString( str, n){
    if( n==0){
        return "";
    }

    return str + repeatString(str,n-1);
}

function repeatString2( str, n){
    return str.repeat(n);
}

console.log(repeatString("abc",5));

console.log(repeatString2("abc",5));

function startWith( str, pat){

    for( let i=0; i<pat.length; i++ ){
        if( str[i] != pat[i] ){
            return false;
        }
    }
    return true;

}

function startWith2( str, pat){

    // return str.toLowerCase().startsWith(pat.toLowerCase());

    return str.startsWith(pat);

}

console.log(startWith("hello world","hello"));
console.log(startWith("hello world","Hello"));
console.log(startWith("hello world","world"));

console.log(startWith2("hello world","hello"));
console.log(startWith2("hello world","Hello"));
console.log(startWith2("hello world","world"));
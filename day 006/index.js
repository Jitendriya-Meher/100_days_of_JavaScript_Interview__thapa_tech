
function isPal( str){

     i=0;
    j=str.length-1;
    str = str.toLowerCase();

    while(i<j){
        if( str[i] != str[j]){
            return false;
        }
        i++;
        j--;
    }

    return true;
}

function isPal2( str){

    str = str.toLowerCase().replace(/\W/g,"");
    console.log(str);

    let rstr = str.split("").reverse().join("");
    console.log(rstr);

    return str===rstr;
}

ans = isPal("racecar");
console.log(ans);

ans = isPal("jiten");
console.log(ans);

ans = isPal2("ra ceca r,  ,rac  eca r");
console.log(ans);

ans = isPal2("jiten");
console.log(ans);
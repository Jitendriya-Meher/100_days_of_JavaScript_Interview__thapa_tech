
function countChar1(str, ch){

    ans = 0;
    str = str.toLowerCase();
    ch = ch.toLowerCase();
    
    for( i=0; i<str.length; i++){
        if( str[i] == ch){
            ans++;
        }
    }

    return ans;
}

function countChar2(str, ch){

    str = str.toLowerCase();
    ch = ch.toLowerCase();
    
    strArr = str.split('');

    ans = strArr.reduce((accum, currCh) => (currCh==ch)?accum+1:accum, 0);

    ans = strArr.reduce((accum, currCh) =>{
        if( currCh==ch){
            accum++;
        }
        return accum;
    },0);

    return ans;
}

ans = countChar1("MissIssippi","I");
console.log(ans);

ans = countChar2("MissIssippi","I");
console.log(ans);
function simplePasswordValidator( str){

    let lc=false, uc=false, dig=false, len=0;

    for( let ch of str){
        len=len+1;

        if( ch>='a' && ch<='z' ){
            lc=true;
        }
        else if( ch>='A'&& ch<='Z'){
            uc=true;
        }
        else if( ch>='0' && ch<='9' ){
            dig=true;
        }
    }

    if( lc && uc  && dig && len>=8){
        return str;
    }
    else{
        return false;
    }

}

console.log(simplePasswordValidator("Aabb12345"));
console.log(simplePasswordValidator("abb123456"));
console.log(simplePasswordValidator("Aabb12344"));
console.log(simplePasswordValidator("Aabb12"));
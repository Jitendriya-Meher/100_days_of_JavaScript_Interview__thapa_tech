
// recursion
function isPowerOfTwo( n){
    if( n == 1){
        return true;
    }

    if( n%2 == 0){
        return isPowerOfTwo(n/2);
    }
    else{
        return false;
    }
}

function isPowerOfTwo2( n){
   
    for( let i=0; i<n; i++){
        if( 2**i == n){
            return true;
        }
    }

    return false;

}


console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(9)); 

console.log(isPowerOfTwo2(8));
console.log(isPowerOfTwo2(9)); 
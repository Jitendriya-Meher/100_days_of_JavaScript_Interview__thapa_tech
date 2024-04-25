
function numberRange( a,b){
    
    let ans = [];

    for( let i= Math.min( a,b ); i<= Math.max( a,b ); i++ ){
        ans.push(i);
    }

    return ans;
}

console.log(numberRange(0,5));
console.log(numberRange(3,7));
console.log(numberRange(-2,2));
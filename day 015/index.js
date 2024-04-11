
function sumOfSquares( arr){

    let ans = arr.reduce((accum,num) => {
        accum += num**2;
        return accum;
    } , 0);

    return ans;
    
}

function sumOfSquares2( arr){

    let ans = 0;

    for( let num of arr){
        ans += num**2;
    }

    return ans;
    
}

console.log(sumOfSquares([1,2,3]));
console.log(sumOfSquares([1,2,3,4]));
console.log(sumOfSquares([1,2,3,5,10]));

console.log(sumOfSquares2([1,2,3]));
console.log(sumOfSquares2([1,2,3,4]));
console.log(sumOfSquares2([1,2,3,5,10]));
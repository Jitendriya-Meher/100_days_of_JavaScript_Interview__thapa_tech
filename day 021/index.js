
function calcMean( arr){

    if( arr.length == 0 ){
        return 0;
    }

    let sum = arr.reduce((accum, ele)=>{
        return accum + ele;
    },0);

    return sum / arr.length;

}

console.log(calcMean([1,2,3,4,5]));
console.log(calcMean([1,2,3,4]));
console.log(calcMean([]));
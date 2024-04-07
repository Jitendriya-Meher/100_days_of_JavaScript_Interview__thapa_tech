
function sumOfDigits( num){
    if( num==0){
        return 0;
    }

    return num%10 + sumOfDigits(Math.floor(num/10));
}

function sumOfDigits2( num){

    let arr = Array.from(String(num),Number);
    console.log(arr);

    return arr.reduce((accum,curVal) => {
        return accum = accum + curVal
    },0);
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));


console.log(sumOfDigits2(1234));
console.log(sumOfDigits2(4321));
console.log(sumOfDigits2(123456));


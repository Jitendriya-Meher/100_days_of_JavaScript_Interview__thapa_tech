
function numberRange(a,b, arr=[]){
    if( a>b){
        return arr;
    }
    arr.push(a);
    return numberRange(a+1,b,arr);
}

console.log(numberRange(0,5));
console.log(numberRange(3,15));
console.log(numberRange(-5,5));
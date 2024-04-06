
function avg(arr){

    let sum = arr.reduce((acc,num)=>{
        return acc + num
    },0);

    return sum/arr.length;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

ans = avg(arr);
console.log(ans);

arr = [1,2,3,4,5];

ans = avg(arr);
console.log(ans);
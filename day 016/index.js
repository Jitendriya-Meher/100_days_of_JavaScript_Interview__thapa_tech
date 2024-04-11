function findMin(arr){
    return Math.min(...arr);
}

console.log(findMin([1,2,3]));
console.log(findMin([1,2,3,-1,-2,-10]));
console.log(findMin([-1]));
console.log(findMin([]));
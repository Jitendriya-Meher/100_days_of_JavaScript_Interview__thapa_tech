function removeDuplicates(arr){

    let newArr = new Set(arr);
    console.log(newArr);

    return [...newArr];

}

console.log("ans :",removeDuplicates([1,2,3,4,5,6,1,2,3]));
console.log("ans :",removeDuplicates([1,2,3,4,5,6,1,2,3,10,10,10,34,6,7,8,0]));
console.log("ans :",removeDuplicates([]));
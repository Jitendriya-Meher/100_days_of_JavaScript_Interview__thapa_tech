
function arrayAreEqual(array1, array2){

    if( array1.length !== array2.length ){
        return false;
    }

    for( let i=0; i< array1.length; i++ ){
        if( array1[i] !== array2[i] ){
            return false;
        }
    }

    return true;
}

function arrayAreEqual2(array1, array2){

    if( array1.length !== array2.length ){
        return false;
    }

    return array1.every((curVal,index) => {
        return curVal === array2[index];
    });
}


console.log(arrayAreEqual([1,2,3], [1,2,3]));
console.log(arrayAreEqual([1,2,3], [1,2,4]));
console.log(arrayAreEqual([], []));


console.log(arrayAreEqual2([1,2,3], [1,2,3]));
console.log(arrayAreEqual2([1,2,3], [1,2,4]));
console.log(arrayAreEqual2([], []));


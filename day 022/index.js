
function findMedian( arr){

    arr.sort((a,b) => {
        return a-b;
    });
    // console.log(arr);

    let first = 0;
    let last = 0;

    let i=0,j=arr.length-1;

    while(i<j){
        first = arr[i];
        last = arr[j];
        i++;
        j--;
    }

    return (first+last)/2;

}

function findMedian2( arr){

    

}

console.log(findMedian([5,1,2,3,4]));
console.log(findMedian([10,11,1,6,2,3,4,5]));
console.log(findMedian([1,2,3,4]));

console.log(findMedian2([5,1,2,3,4]));
console.log(findMedian2([10,11,1,6,2,3,4,5]));
console.log(findMedian2([1,2,3,4]));
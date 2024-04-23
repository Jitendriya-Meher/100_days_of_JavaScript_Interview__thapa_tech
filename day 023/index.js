
function countOccurances( nums){
    let counts = {};

    for( let ele of nums){
        counts[ele] = (counts[ele] || 0) + 1;
    }

    // console.log(counts);
    return counts;
}

let nums = [1,2,2,3,1,4,2,3,4,6];

console.log(countOccurances(nums));
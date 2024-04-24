
function findMode( arr){

    let counts = {};

    for( let ele of arr ){
        counts[ele] = ( counts[ele] || 0) +1;
    }
    // console.log(counts);

    let mode=0,freq=0;

    for( let key in counts ){
        if( freq < counts[key] ){
            freq = counts[key];
            mode = key;
        }
    }

    return mode;
}

console.log(findMode([1,2,2,3,1,4,2]));

function sortAss( arr) {

    arr.sort((a,b) => (a-b));

    return arr;
}

function sortDes( arr) {

    arr.sort((a,b) => (b-a));

    return arr;
}

arr = [1,3,5,7,9,2,4,6,8,10,12,14,16,11,13,15,17];

ans = sortAss(arr);
console.log(ans);

ans = sortDes(arr);
console.log(ans);
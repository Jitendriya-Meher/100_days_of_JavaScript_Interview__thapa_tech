function maxi( arr){

    // return Math.max(1,2,3,4,5,6);

    return Math.max(...arr)

}

arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

ans = maxi(arr);
console.log(ans);
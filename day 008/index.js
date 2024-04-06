
function factorial( num){
    if( num < 0){
        return "Enter a valid number";
    }

    if( num == 0){
        return 1;
    }

    return num * factorial(num-1);
}

ans = factorial(5);
console.log(ans);

ans = factorial(0);
console.log(ans);

ans = factorial(10);
console.log(ans);

ans = factorial(-10);
console.log(ans);
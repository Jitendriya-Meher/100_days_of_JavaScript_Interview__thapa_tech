
function chechTriangle( a,b,c){

    if( a==b && b==c){
        return "Equlateral";
    }

    if( a==b || b==c || a==c){
        return "Isoscales";
    }

    return "Scalene";

}

ans = chechTriangle(3,3,3);
console.log(ans);

ans = chechTriangle(3,4,3);
console.log(ans);

ans = chechTriangle(3,4,5);
console.log(ans);
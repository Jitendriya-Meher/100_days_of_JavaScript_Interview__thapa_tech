
function genrateHash1( str){
    ans = "#";
    strArr = str.split(" ");
    // console.log(strArr);

    strArr.forEach((s) => {
        w1 = s[0].toUpperCase();
        w2 = s.substring(1).toLowerCase();
        ans += w1;
        ans += w2;
    });

    return ans;
}

function genrateHash2( str){
    
    strArr = str.split(" ");
    ans = "#"
    
    ansArr = strArr.map((s) => ( s.replace(s[0],s[0].toUpperCase())) );
    
    // ansArr.forEach((s) => {
    //     ans+=s;
    // })

    ans+=ansArr.join("");

    return ans;

}

ans1 = genrateHash1("my name is jitendriya meher");
console.log("ans1 =",ans1);

ans1 = genrateHash2("my name is jitendriya meher");
console.log("ans2 =",ans1);
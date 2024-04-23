
function toCamelCase( str){

    let strArr = str.split(" ");
    // console.log(strArr);
    let ans = "";

    let modifiedArr = strArr.map((s) => {

        ch = s.toLowerCase();
        ch = ch[0].toUpperCase() + ch.substring(1);
        ans += ch;
        return ch;
    });

    ans = ans[0].toLowerCase() + ans.substring(1);

    return ans;

}

function toCamelCase2( str){

    str = str.trim().split(" ");
    // console.log(str);

    str = str.map((s,i) => {
        if( i === 0){
            return s.toLowerCase();
        }
        else{
            return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
        }
    });
    // console.log(str);

    str = str.join("");
    return str;

}

console.log(toCamelCase("hello world jiTen"));

console.log(toCamelCase2("hello world jiTen"));
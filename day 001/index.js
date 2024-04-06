// longest word in a string

function findLongestWord1(str){

    ansWord = "";
    ansLen = 0;
    strArr = str.split(" ");

    strArr.map((s) => {
        if( s.length > ansLen){
            ansWord = s;
            ansLen = s.length;
        }
    });

    return ansWord;
}

function findLongestWord2(str){
    
    if( str.trim().length === 0){
        return "";
    }

    strArr = str.split(" ");
    console.log(strArr);

    ans = strArr.sort((a,b) => (a.length-b.length))

    return ans.at(-1);
}

function findLongestWord3(str){
    
    strArr = str.split(" ");

    ans = strArr.reduce((accum,currWord) => (
        currWord.length > accum.length ? currWord : accum
    ),"");

    return ans;
}

ans1 = findLongestWord1("hii i am jitendriya how are you");
console.log("ans1 =",ans1);

ans2 = findLongestWord2("hii i am jitendriya how are you");
console.log("ans2 =",ans2);

ans3 = findLongestWord3("hii i am jitendriya how are you");
console.log("ans3 =",ans3);

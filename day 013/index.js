function countVowels( str){

    let ans = 0;

    for( let i=0; i<str.length; i++ ){
        if( str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U'){
            ans++;
        }
    }

    return ans;

}

const countVowels2 = (str) => {

    let vowels = ['a','e','i','o','u'];

    let strArr = str.split("");
    // console.log(strArr);

    let ans = 0;

    for( let ch of strArr){
        if( vowels.includes(ch.toLowerCase()) ){
            ans++;
        }
    }

    return ans;
}

console.log(countVowels("Hello World!"));
console.log(countVowels("The qicek brown fox"));
console.log(countVowels("Amit"));

console.log(countVowels2("Hello World!"));
console.log(countVowels2("The qicek brown fox"));
console.log(countVowels2("Amit"));
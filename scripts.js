// Find the first non repeating char in a string?

function firstNonrepeatingChar(string) {


    for(let i = 0, length = string.length; i < length; i++){
        let repeating = false;
        for(let j = i+1; j < string.length; j++){
            if(string[i] === string[j]){
                repeating = true;
            }
        }

        if(!repeating){
            return string[i];
        }
    }

}

//     Remove duplicate characters from a sting?


function removeDuplicates(string) {

    let newString = "";

    for(let i = 0, length = string.length; i < length; i++) {

        if(newString.includes(string[i])){
            //
        }
        else{
            newString += string[i];
        }


    }

    return newString;

}


//     Verify a word as palindrome?

function isPalindrome(string) {

    let reverse = "";

    for(i = string.length - 1; i >= 0; i-- ){
        reverse += string[i];
    }

    return reverse === string;

}

let string = "nitin"
console.log(firstNonrepeatingChar(string));
console.log(removeDuplicates(string));
console.log(isPalindrome(string));
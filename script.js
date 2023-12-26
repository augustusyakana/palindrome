const inputText = document.querySelector('#text-input');
const submitBtn = document.querySelector('#check-btn');
const resultDiv = document.querySelector('#result');

let result = '';

const checkText = () => {
    let text = inputText.value;
    let cleanedWord = cleanWord(text);
    let word1 = cleanedWord.toLowerCase();
    let word = removeNonAlphaNumCharacters(word1);
    let reversedWord = reverseString(word);

    if (word === ''){
        alert("Please input a value");
    } else {
        if (word === reversedWord){
            console.log(word)
            result = `${cleanedWord} is a palindrome`;
            resultDiv.innerText = result;
        } else {
            console.log(`${word}, ${reversedWord}`)
            result = `${cleanedWord} is not a palindrome`;
            resultDiv.innerText = result;
        }
    }

    inputText.value = '';
}

function cleanWord(word){
    return word.replace(/[^a-zA-Z0-9\s.,]/gi, '');
}

function removeNonAlphaNumCharacters(word){
    return word.replace(/[^0-9a-z]/gi, '');
}

function reverseString(word){
    let cleanedWord = removeNonAlphaNumCharacters(word);
    let splitString = cleanedWord.split("");
    let reverseArray = splitString.reverse();
    let reverseWord = reverseArray.join("");
    return reverseWord;
}

submitBtn.addEventListener('click', checkText);
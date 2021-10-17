import './style.css'

// theme switcher
const themeSwitchButton = document.getElementById('themeSwitchButton')
themeSwitchButton.addEventListener('click', switchTheme);
function switchTheme() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}


// sigil generator
const submitButton = document.getElementById('submit');
let output = document.getElementById('output');
submitButton.addEventListener('click', genSigil);


function genSigil() {

    function removeDuplicate(userInput, n) {    // this works
        var index = 0;
        for (var i = 0; i < n; i++) {
            var j;
            for (j = 0; j < i; j++) {
                if (userInput[i] == userInput[j]) {
                    break;
                }
            }
            if (j == i) {
                userInput[index++] = userInput[i];
            }
        }
        return userInput.join("").slice(userInput, index);
    }
    var userInput = document.getElementById('input').value.split('');
    var n = userInput.length;
    var removedDuplicates = removeDuplicate(userInput, n);
    var finalString = removedDuplicates;


    function removeDuplicates(input) {
        let disallow = [' ', 'a', 'e', 'i', 'o', 'u'];
        let stringFromArray = input.split('');

        for (let i = 0; i < disallow.length; i++) {
            for (let j = 0; j < stringFromArray.length; j++) {
                if (disallow[i] == stringFromArray[j]) {
                    stringFromArray.splice(j,1);
                }
            }
        }
        finalString = stringFromArray.join('');
    }
    removeDuplicates(removedDuplicates);



    output.innerHTML = finalString;
}
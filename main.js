import './style.css'

// theme switcher
const themeSwitchButton = document.getElementById('themeSwitchButton')
themeSwitchButton.addEventListener('click', switchTheme);
function switchTheme() {
    let element = document.body;
    element.classList.toggle('dark-mode');
}

// sigil generator
const genSigilBtn = document.getElementById('genSigilBtn');
let output = document.getElementById('output');
let description = document.getElementById('description');
genSigilBtn.addEventListener('click', genSigil);

function genSigil() {
    
    let userInput = document.getElementById('input').value.split('');

    if (userInput == undefined || userInput == '') {
        alert(`You didn't enter anything in`);
    } else {
        let n = userInput.length;
        let removedDuplicates = removeDuplicate(userInput, n);
        let finalString;
        function removeDuplicate(userInput, n) {
            let index = 0;
            for (let i = 0; i < n; i++) {
                let j;
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
        description.innerHTML = `removed duplicate characters, spaces, and vowels.`
    }
    
}
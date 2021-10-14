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



    // this doesn't work yet.
    /* the logic is:
    if removedDuplicates contains:  ' ', 'a', 'e', 'i', 'o', 'u'
    replace said with ''
    return new string.
    */

    // function removeVowelsAndSpaces() {
    //     for (k = 0; k < removedDuplicates.length; k++) {
    //         let removeThese = [' ', 'a', 'e', 'i', 'o', 'u'];
    //         return removedDuplicates.replace(removeThese[k],'');
    //     }
    // }
        
    // function removeVowelsAndSpaces() {
    //     var removeThese = [' ', 'a', 'e', 'i', 'o', 'u'];
    //     for (i = 0; i < removedDuplicates.length; i++) {
    //         if (removedDuplicates )
    //         removedDuplicates.replace(removeThese[i],'');
    //     }
    // }


    // function checker(value) {
    //     var removeThese = [' ', 'a', 'e', 'i', 'o', 'u'];
      
    //     for (var i = 0; i < removeThese.length; i++) {
    //       if (value.indexOf(removeThese[i]) > -1) {
    //         return false;
    //       }
    //     }
    //     return true;
    //   }
      
    //   removedDuplicates = removeThese.filter(checker);

    // let finalString = removedDuplicates;
    // for (let i = 0; i < removedDuplicates.length; i++) {
    //     if (
    //         finalString[i] === ' ' ||
    //         finalString[i] === 'a' ||
    //         finalString[i] === 'e' ||
    //         finalString[i] === 'i' ||
    //         finalString[i] === 'o' ||
    //         finalString[i] === 'u'
    //         )
    //         {
    //             finalString.replace(finalString[i],'');
    //         }
    //     }


    var removeThese = [' ', 'a', 'e', 'i', 'o', 'u'];
    
    function removeVowelsAndSpaces(input, remove) {

        var index = 0;
        for (var i = 0; i < input.length; i++) {
            var j;
            for (j = 0; j < i; j++) {
                if (input[i] == remove[j]) {
                    input.replace(input[i],'');
                }
            }
            if (j == i) {
                input[index++] = input[i];
            }
        }
        return input;
    }

    var finalString = removeVowelsAndSpaces(removedDuplicates,removeThese);


        output.innerHTML = finalString;
}
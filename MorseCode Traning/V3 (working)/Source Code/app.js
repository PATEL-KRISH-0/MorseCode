const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--.."
};

const words = ["krish", "jay", "neel", "vansh"];

let spacebarPressed = false;
let spacebarPressStartTime = 0;
let spacebarPressDuration = 0;
let correct = 0;
let wrong = 0;
let tttt = 0;

const letterKeys = Object.keys(morseCode);

const R = document.querySelector(".R");
const W = document.querySelector(".W");

const output = document.querySelector(".output");
const input = document.querySelector(".input");
const char = document.querySelector(".char");

const submit = document.querySelector(".submit");
const next = document.querySelector(".next");

const hintA = document.querySelector(".hintA");
const ansA = document.querySelector(".ansA");

const realAnsOfHint = document.querySelector(".realAnsOfHint");
const realAnsOfAns = document.querySelector(".realAnsOfAns");

let wo;

function wordMor(word) {
    word = word.toUpperCase()
    let arr = []

    for (const i of word) {
        arr.push(morseCode[i])
    }

    return arr.join(" ")
}

const randomCharGenerator = () => {
    const randomLetter = letterKeys[Math.floor(Math.random() * letterKeys.length)];
    return randomLetter
}

const randomWordGenerator = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    let wordCode = wordMor(word);
    return [word, wordCode]
}

const reset = () => {

    wo = randomWordGenerator()
    char.innerHTML = wo[0];
    input.value = ""
    output.innerHTML = ""

    realAnsOfHint.style.display = "none"
    document.querySelectorAll(".spens-inputs")[0].style.display = "flex"

    realAnsOfAns.style.display = "none"
    document.querySelectorAll(".spens-inputs")[1].style.display = "flex"

    //! code for chrecters
    // char.innerHTML = randomCharGenerator()
    // input.value = ""
    // output.innerHTML = ""

    // realAnsOfHint.style.display = "none"
    // document.querySelectorAll(".spens-inputs")[0].style.display = "flex"

    // realAnsOfAns.style.display = "none"
    // document.querySelectorAll(".spens-inputs")[1].style.display = "flex"
}

// const chackCode = (val = 0) => {
//     // if (val == 4) {
//         if (wo[1] == output.innerHTML) {
//             alert("crrect   " + wo[1] + "   =   " + char.innerHTML);
//             reset()
//             correct = correct + 1;
//             R.innerHTML = correct
//             return 0
//         }
//         else {
//             alert(`you are wrong : ${wo[0] + "   =   " + wo[1]}`);
//             alert("try again");
//             output.innerHTML = ""
//             wrong = wrong + 1;
//             W.innerHTML = wrong
//             return 0
//         }

//     // }
//     if (morseCode[char.innerHTML] == output.innerHTML || morseCode[char.innerHTML] == input.value) {
//         alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
//         reset();
//         correct = correct + 1;
//         R.innerHTML = correct
//         return 0;
//     }

// }

const chackCode = (val = 0) => {
    // if (val == 4) {
    // console.log(wo[1] <= (output.innerHTML).length);
    if (wo[1] == output.innerHTML) {
        alert("crrect   " + wo[1] + "   =   " + char.innerHTML);
        reset()
        correct = correct + 1;
        R.innerHTML = correct
        return 0
    }
    else if (wo[1].length <= (output.innerHTML).length) {
        alert("no not correct   " + wo[1] + "   =   " + wo[0]);
        reset()
    }

    // else {
    //     alert(`you are wrong : ${wo[0] + "   =   " + wo[1]}`);
    //     alert("try again");
    //     output.innerHTML = ""
    //     wrong = wrong + 1;
    //     W.innerHTML = wrong
    //     return 0
    // }

    // }
    // if (morseCode[char.innerHTML] == output.innerHTML || morseCode[char.innerHTML] == input.value) {
    //     alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
    //     reset();
    //     correct = correct + 1;
    //     R.innerHTML = correct
    //     return 0;
    // }

}

// const chackCodeForInput = () => {
//     if (input.value == "") {
//         alert("Please Enter Ans");
//         return 0;
//     }
//     else if (morseCode[char.innerHTML] == input.value) {
//         alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
//         reset()
//         correct = correct + 1;
//         R.innerHTML = correct;
//         return 0;
//     }
//     else {
//         alert(`you are wrong : ${char.innerHTML + "   =   " + morseCode[char.innerHTML]}`);
//         alert("try again");
//         input.value = "";
//         wrong = wrong + 1;
//         W.innerHTML = wrong;
//         return 0;
//     }

// }

const chackCodeForInput = () => {
    if (input.value == "") {
        alert("Please Enter Ans");
        return 0;
    }
    else if (wo[1] == input.value) {
        alert("crrect   " + wo[0] + "   =   " + wo[1]);
        reset()
        correct = correct + 1;
        R.innerHTML = correct;
        return 0;
    }
    else {
        alert(`you are wrong : ${char.innerHTML + "   =   " + wo[1]}`);
        alert("try again");
        input.value = "";
        wrong = wrong + 1;
        W.innerHTML = wrong;
        return 0;
    }

}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32 && !spacebarPressed) {
        spacebarPressed = true;
        spacebarPressStartTime = Date.now();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 32 && spacebarPressed) {
        spacebarPressed = false;
        spacebarPressDuration = Date.now() - spacebarPressStartTime;

        if (spacebarPressDuration < 150) {
            output.innerHTML = output.innerHTML + "."
            chackCode()
            // chackCode(output.innerHTML.length)
        }
        else {
            output.innerHTML = output.innerHTML + "-"
            chackCode()
            // chackCode(output.innerHTML.length)
        }
        tttt = Date.now()
    }

});

input.addEventListener("input", () => {
    if (input.value == "") {
        return 0;
    }
    else if ((input.value[input.value.length - 1] != "-") && input.value[input.value.length - 1] != "." && input.value[input.value.length - 1] != " ") {
        // if (!/[-.]$/.test(input.value)) {
        alert("You can Enter only . or - or ' ' ")
        input.value = ""
    }
})

hintA.addEventListener("click", () => {
    realAnsOfHint.style.display = "flex"
    realAnsOfHint.innerHTML = `The length of code is : ${wo[1].length} (including spece)`
    document.querySelectorAll(".spens-inputs")[0].style.display = "none"
})

ansA.addEventListener("click", () => {
    realAnsOfAns.style.display = "flex"
    realAnsOfAns.innerHTML = `Code is : ${wo[1]}`
    console.log(wo[1]);
    document.querySelectorAll(".spens-inputs")[1].style.display = "none"
})

submit.onclick = function () {
    chackCodeForInput()
}

next.onclick = function () {
    reset()
}

reset()

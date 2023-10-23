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

let spacebarPressed = false;
let spacebarPressStartTime = 0;
let spacebarPressDuration = 0;
let correct = 0;
let wrong = 0;

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

const randomCharGenerator = () => {
    const randomLetter = letterKeys[Math.floor(Math.random() * letterKeys.length)];
    return randomLetter
}

const reset = () => {
    char.innerHTML = randomCharGenerator()
    input.value = ""
    output.innerHTML = ""

    realAnsOfHint.style.display = "none"
    document.querySelectorAll(".spens-inputs")[0].style.display = "flex"

    realAnsOfAns.style.display = "none"
    document.querySelectorAll(".spens-inputs")[1].style.display = "flex"
}

const chackCode = (val = 0) => {
    if (val == 4) {
        if (morseCode[char.innerHTML] == output.innerHTML) {
            alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
            reset()
            correct = correct + 1;
            R.innerHTML = correct
            return 0
        }
        else {
            alert(`you are wrong : ${char.innerHTML + "   =   " + morseCode[char.innerHTML]}`);
            alert("try again");
            output.innerHTML = ""
            wrong = wrong + 1;
            W.innerHTML = wrong
            return 0
        }

    }
    if (morseCode[char.innerHTML] == output.innerHTML || morseCode[char.innerHTML] == input.value) {
        alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
        reset();
        correct = correct + 1;
        R.innerHTML = correct
        return 0;
    }

}

const chackCodeForInput = () => {
    if (input.value == "") {
        alert("Please Enter Ans");
        return 0;
    }
    else if (morseCode[char.innerHTML] == input.value) {
        alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
        reset()
        correct = correct + 1;
        R.innerHTML = correct;
        return 0;
    }
    else {
        alert(`you are wrong : ${char.innerHTML + "   =   " + morseCode[char.innerHTML]}`);
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
            chackCode(output.innerHTML.length)

        }
        else {
            output.innerHTML = output.innerHTML + "-"
            chackCode(output.innerHTML.length)
        }
    }
});

input.addEventListener("input", () => {
    if (input.value == "") {
        return 0;
    }
    else if ((input.value[input.value.length - 1] != "-") && input.value[input.value.length - 1] != ".") {
        // if (!/[-.]$/.test(input.value)) {
        alert("You can Enter only . or - ")
        input.value = ""
    }
})

hintA.addEventListener("click", () => {
    realAnsOfHint.style.display = "flex"
    realAnsOfHint.innerHTML = `The length of code is : ${morseCode[char.innerHTML].length}`
    document.querySelectorAll(".spens-inputs")[0].style.display = "none"
})

ansA.addEventListener("click", () => {
    realAnsOfAns.style.display = "flex"
    realAnsOfAns.innerHTML = `Code is : ${morseCode[char.innerHTML]}`
    document.querySelectorAll(".spens-inputs")[1].style.display = "none"

})

submit.onclick = function () {
    chackCodeForInput()
}

next.onclick = function () {
    reset()
}

reset()

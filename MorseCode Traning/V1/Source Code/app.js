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

const letterKeys = Object.keys(morseCode);
const output = document.querySelector(".output");
const submit = document.querySelector(".submit");
const next = document.querySelector(".next");
const input = document.querySelector(".input");
const char = document.querySelector(".char");

const randomCharGenerator = () => {
    const randomLetter = letterKeys[Math.floor(Math.random() * letterKeys.length)];
    return randomLetter
}

const reset = () => {
    char.innerHTML = randomCharGenerator()
    input.value = ""
    output.innerHTML = ""

}

const chackCode = (val = 0) => {
    if (val == 4) {
        if (morseCode[char.innerHTML] == output.innerHTML) {
            alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
            reset()
            return 0
        }
        else {
            alert("try next time")
            reset()
            return 0
        }

    }
    if (morseCode[char.innerHTML] == output.innerHTML || morseCode[char.innerHTML] == input.value) {
        alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
        reset()
        return 0
    }

}

const chackCodeForInput = () => {
    if (morseCode[char.innerHTML] == input.value) {
        alert("crrect   " + morseCode[char.innerHTML] + "   =   " + char.innerHTML);
        reset()
        return 0
    }
    else {
        alert("try next time")
        reset()
        return 0
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
    // if ((input.value[input.value.length - 1] != "-") && input.value[input.value.length - 1] != ".") {
    if (!/[-.]$/.test(input.value)) {
        alert("You can Enter only . or - ")
        input.value = ""
    }
})

submit.onclick = function () {
    chackCodeForInput()
}

next.onclick = function () {
    reset()
}

reset()

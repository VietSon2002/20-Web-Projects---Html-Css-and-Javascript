const encryptedInp =document.querySelector(".encrypted__input");
const decryptedInp =document.querySelector(".decrypted__input");
const decodeBtn =document.querySelector(".decode__btn");
const clearBtn =document.querySelector(".clear__btn");

const Atbash = {
    Z: "A",
    Y: "B",
    X: "C",
    W: "D",
    V: "E",
    U: "F",
    T: "G",
    S: "H",
    R: "I",
    Q: "J",
    P: "K",
    O: "L",
    N: "M",
    M: "N",
    L: "O",
    K: "P",
    J: "Q",
    I: "R",
    H: "S",
    G: "T",
    F: "U",
    E: "V",
    D: "W",
    C: "X",
    B: "Y",
    A: "Z",
};

function decryptText() {
    const encryptedText = encryptedInp.value;
    const decrytedText = decrypt(encryptedText);
    decryptedInp.value = decrytedText ;
}

function decrypt(text) {
    const newText = text.toUpperCase();
    const encLetters = newText.split("");
    const decLetters = [];
    console.log(encLetters);
    encLetters.forEach(letter =>{
        const decLetter = Atbash[letter];
        const newLetter = decLetter ? decLetter : "space"; //xu lt khoang trongtrong
        decLetters.push(newLetter); 
    });
    
    return decLetters.join("").replaceAll("space"," ");
}

function clearInputs() {
    encryptedInp.value = "";
    decryptedInp.value ="";
}

clearBtn.addEventListener("click",clearInputs);
decodeBtn.addEventListener("click",decryptText);
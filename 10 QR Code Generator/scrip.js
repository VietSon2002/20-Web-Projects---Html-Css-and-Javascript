const imgBox = document.querySelector(".imgBox");
const qrImg = document.querySelector(".qr--img");
const qtText = document.querySelector(".input");
const generateBtn = document.querySelector(".generate--btn");

function generateQr() {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qtText.value}`
    imgBox.classList.add("show");
}

generateBtn.addEventListener("click", generateQr)
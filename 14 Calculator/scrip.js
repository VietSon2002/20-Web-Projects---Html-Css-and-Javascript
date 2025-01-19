const preOperation = document.querySelector(".previous-operation");
const result = document.querySelector(".result");
const calcBtn = document.querySelector(".calc-button");
const deleteBtn = document.querySelector(".delete-button");

function addSign(sign) {
    result.innerHTML += sign;
}

function calculate() {
    //loc ket qua
    const filteredRes = result.innerHTML.replace("x", "*").replace("÷", "/")
    //tinh ket qua
    result.innerHTML = eval(filteredRes);
}


// xoa 1 ky tu
function deleteSign() {
    const text = result.innerHTML;

    if (text.endsWith(" ")) result.innerHTML = text.slice(0, -2);
    else result.innerHTML = text.slice(0, -1);
}

// ham tinh %
function calcPercentage() {
    const finalResult = eval(result.innerHTML.split("%").map(item => {
        return eval(item);
    })
        .join("*")) / 100;
    result.innerHTML = finalResult;
}

// event khi bam nut
deleteBtn.addEventListener("click", deleteSign);

calcBtn.addEventListener("click", () => {
    preOperation.textContent = result.innerHTML;
    // goi ham %
    if (result.innerHTML.includes("%")) {
        calcPercentage();
        return;
    }
    calculate();
});

document.addEventListener("click", (e) => {
    //nhap so
    const sign = e.target.dataset.sign;
    if (sign) addSign(sign);

    //xoa tat ca
    if (e.target.className === "delete-all") result.innerHTML = "";
});


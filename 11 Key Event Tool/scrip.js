const keyCode = document.querySelector(".key__code");
const keyText = document.querySelector(".key__text");
const firstCtn = document.querySelector(".first__container");
const secondCtn = document.querySelector(".second__container");

document.addEventListener("keydown", (e) => {
    firstCtn.classList.add("hidde");/* khi bam nut bat ki thi tat container dau tien  */
    secondCtn.classList.add("show"); /* bat container thu 2*/
    const code = e.keyCode;
    const text = e.key;
    keyCode.textContent = code;
    keyText.textContent = code === 32 ? "space" : text;
});  
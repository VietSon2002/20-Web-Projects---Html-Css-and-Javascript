const popupCtn = document.querySelector(".popup__ctn");
const popup = document.querySelector(".popup");

function showPopup(){
    popupCtn.classList.add("show");
    popup.classList.add("zoom-in");
    popup.classList.remove("zoom-out");
}

//tat popup khi bam x
function hiddenPopup(){
    popup.classList.add("zoom-out");
    setTimeout(()=>{
        popupCtn.classList.remove("show");
    },400);
}

//ham hien popup khi bam vao bo phim gan nhat
document.addEventListener("click",(e)=>{
    if(e.target.closest(".movie")) showPopup();
    if(e.target.className === "close") hiddenPopup();
});

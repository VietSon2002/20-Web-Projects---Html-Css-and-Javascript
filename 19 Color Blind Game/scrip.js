const circles = [...document.querySelectorAll(".circle")];
const timer = document.querySelector(".timer");
const scoreDisplay = document.querySelector(".score");
let score = 0;
// Biến thiết lập ban đầu
let timerSec = 10; // Thời gian đếm ngược
let colorNr = 0; // Chỉ số màu hiện tại
let opacity = 0.6; // Độ trong suốt mặc định
let randomNr; // Vị trí ngẫu nhiên

// Danh sách các màu sắc
const colors = [
  "rgba(128, 255, 212, OPACITY)",
  "rgba(255, 183, 0, OPACITY)",
  "rgba(239, 37, 60, OPACITY)",
  "rgba(36, 200, 255, OPACITY)",
  "rgba(22, 218, 100, OPACITY)",
  "rgba(112, 45, 190, OPACITY)",
  "rgba(245, 236, 204, OPACITY)",
  "rgba(255, 214, 10, OPACITY)",
  "rgba(154, 141, 152, OPACITY)",
  "rgba(120, 73, 54, OPACITY)",
];

// Hàm đếm ngược thời gian
function setNewTime() {
  timerSec -= 1;
  timer.textContent = timerSec;

  if (timerSec < 0) {
    alert("Losing today means winning tomorrow");
    init(); // Đặt lại trạng thái ban đầu
    SetNewColor(); // Thiết lập màu mới
  }
}

// Hàm thiết lập màu mới
function SetNewColor() {
  if (colorNr >= colors.length) colorNr = 0; // Vòng lặp lại danh sách màu

  // Lấy màu hiện tại và thay thế độ trong suốt
  const currentColor = colors[colorNr].replace("OPACITY", "1");
  const semiTransparentColor = colors[colorNr].replace("OPACITY", opacity.toFixed(2));

  // Đặt vị trí ngẫu nhiên
  randomNr = Math.floor(Math.random() * circles.length);

  // Đổi màu toàn bộ
  circles.forEach((circle) => {
    circle.style.backgroundColor = currentColor;
  });

  // Đặt màu mờ cho một hình ngẫu nhiên
  circles[randomNr].style.backgroundColor = semiTransparentColor;

  // Tăng độ trong suốt và chỉ số màu
  opacity += 0.05;
  colorNr += 1;
  timerSec = 11; // Reset thời gian đếm ngược
}

// Hàm kiểm tra màu khi người dùng click
function checkColor(e) {
  const color = e.target.closest(".circle");
  if (!color) return;

  const currentColor = color.style.backgroundColor;

  // Kiểm tra nếu chọn đúng màu nhạt hơn
  if (color === circles[randomNr]) {
    score += 1; // Cộng điểm
    scoreDisplay.textContent = score; // Cập nhật giao diện
    SetNewColor(); // Thiết lập màu mới
  } else {
    alert("Losing today means winning tomorrow");
    init(); // Đặt lại trạng thái ban đầu
    SetNewColor(); // Thiết lập màu mới
  }
}

// Hàm khởi tạo lại trạng thái ban đầu
function init() {
  timerSec = 11;
  opacity = 0.55;
  colorNr = 0;
  score = 0; // Reset điểm
  scoreDisplay.textContent = score; // Cập nhật lại điểm số
}

// Khởi chạy chương trình
SetNewColor();
setInterval(setNewTime, 1000); // Gọi hàm đếm ngược mỗi giây
document.addEventListener("click", checkColor); // Lắng nghe sự kiện click

const btn = document.getElementById('trippie-btn');
const originalText = "Learn More";
const clickedText = "You are already surfing the website! 😉";

// 当点击按钮时
btn.addEventListener('click', function() {
  this.innerText = clickedText;
  this.style.backgroundColor = "#4CAF50"; // 选加：变绿表示成功或惊喜
});

// 当鼠标挪开 (Mouse Leave) 时
btn.addEventListener('mouseleave', function() {
  // 恢复原本的文字
  this.innerText = originalText;
  this.style.backgroundColor = ""; // 恢复原本颜色
});
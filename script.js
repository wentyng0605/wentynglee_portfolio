const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
});

document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});

    const btn = document.getElementById('trippie-btn');
const originalText = "Learn More";
const clickedText = "Already here! 😉";

// 当点击按钮时
btn.addEventListener('click', function() {
  this.innerText = clickedText;
});

// 当鼠标挪开 (Mouse Leave) 时
btn.addEventListener('mouseleave', function() {
  // 恢复原本的文字
  this.innerText = originalText;
  this.style.backgroundColor = ""; // 恢复原本颜色
});
  
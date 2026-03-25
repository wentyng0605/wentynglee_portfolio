const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // CSS 中需定义 .active { opacity: 1; transform: translateY(0); }
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// 在 CSS 中补充一个类
// .reveal.active { opacity: 1 !important; transform: translateY(0) !important; }
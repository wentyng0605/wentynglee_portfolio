window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section'); // 确保你的项目是用 <section id="..."> 包裹的
  let navItems = document.querySelectorAll('.nav-item');

  sections.forEach((section, i) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navItems.forEach(item => {
        item.classList.remove('active');
        // 匹配链接的 href 和 section 的 id
        if (item.querySelector('a').getAttribute('href') === '#' + id) {
          item.classList.add('active');
        }
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.querySelector('a').getAttribute('href').includes(current)) {
      item.classList.add('active');
    }
  });
});
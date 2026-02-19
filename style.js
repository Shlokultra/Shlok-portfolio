//   // Custom cursor
//   const cursor = document.getElementById('cursor');
//   const ring = document.getElementById('cursorRing');
//   let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
//   document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; });
//   function animRing() { ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12; ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'; requestAnimationFrame(animRing); }
//   animRing();

//   // Scroll reveal
//   const reveals = document.querySelectorAll('.reveal');
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach((e, i) => {
//       if (e.isIntersecting) {
//         setTimeout(() => e.target.classList.add('visible'), 100);
//         observer.unobserve(e.target);
//       }
//     });
//   }, { threshold: 0.1 });
//   reveals.forEach(r => observer.observe(r));

//   // Nav highlight
//   const sections = document.querySelectorAll('section[id]');
//   const navLinks = document.querySelectorAll('.nav-links a');
//   window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id'); });
//     navLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + current ? 'var(--green)' : ''; });

//   });


//   // Theme toggle
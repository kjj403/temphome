// 모바일 내비게이션 토글
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show');
});

// 간단한 폼 제출 시 메시지 처리
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value;
  const message = form.message.value;
  // 여기서 실제 API 요청을 보낼 수 있습니다.
  msg.textContent = '메시지가 전송되었습니다. 감사합니다!';
  form.reset();
  setTimeout(() => msg.textContent = '', 4000);
});

// 부드러운 스크롤 (선택적)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior: 'smooth'});
      if(mainNav.classList.contains('show')) mainNav.classList.remove('show');
    }
  });
});
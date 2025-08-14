/* script.js — lightweight UI behavior for modal + demo login */
document.addEventListener('DOMContentLoaded', () => {
  // modal elements
  const modalOverlay = document.getElementById('modal-overlay');
  const btnOpen = document.getElementById('btn-login-open');
  const btnClose = document.getElementById('modal-close');

  const modalLogin = document.getElementById('modal-login');
  const modalRegister = document.getElementById('modal-register');
  const modalForgot = document.getElementById('modal-forgot');
  const modalTitle = document.getElementById('modal-title');

  // open / close
  btnOpen?.addEventListener('click', () => {
    showModal('login');
  });
  btnClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  function showModal(mode = 'login'){
    modalOverlay.classList.add('show');
    switchTo(mode);
  }
  function closeModal(){
    modalOverlay.classList.remove('show');
  }

  // switchers
  function switchTo(mode){
    modalLogin.classList.remove('active');
    modalRegister.classList.remove('active');
    modalForgot.classList.remove('active');
    if (mode === 'login'){
      modalLogin.classList.add('active');
      modalTitle.textContent = 'Login DSRT';
    } else if (mode === 'register'){
      modalRegister.classList.add('active');
      modalTitle.textContent = 'Register DSRT';
    } else if (mode === 'forgot'){
      modalForgot.classList.add('active');
      modalTitle.textContent = 'Lupa Password';
    }
  }

  // link elements inside modal
  document.getElementById('open-register')?.addEventListener('click', (e) => { e.preventDefault(); switchTo('register'); });
  document.getElementById('open-forgot')?.addEventListener('click', (e) => { e.preventDefault(); switchTo('forgot'); });
  document.getElementById('back-to-login-from-reg')?.addEventListener('click', (e) => { e.preventDefault(); switchTo('login'); });
  document.getElementById('back-to-login-from-forgot')?.addEventListener('click', (e) => { e.preventDefault(); switchTo('login'); });

  // Demo form submits:
  // LOGIN -> redirect to dashboard.html (simulate successful login)
  document.getElementById('modal-login-submit')?.addEventListener('click', () => {
    // Basic validation (client-side demo)
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value.trim();
    if (!email || !pass) { alert('Isi email dan password untuk demo.'); return; }
    // in real: call backend auth
    closeModal();
    // simulate redirect to dashboard
    location.href = 'dashboard.html';
  });

  // REGISTER (demo): validate and switch to login
  document.getElementById('modal-register-submit')?.addEventListener('click', () => {
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const p1 = document.getElementById('reg-pass').value;
    const p2 = document.getElementById('reg-pass2').value;
    if (!name || !email || !p1) { alert('Isi semua field untuk demo.'); return; }
    if (p1 !== p2) { alert('Password dan konfirmasi tidak cocok.'); return; }
    alert('Akun terdaftar (demo). Silakan login.');
    switchTo('login');
  });

  // FORGOT (demo)
  document.getElementById('modal-forgot-submit')?.addEventListener('click', () => {
    const email = document.getElementById('forgot-email').value.trim();
    if (!email) { alert('Masukkan email untuk demo.'); return; }
    alert('Link reset terkirim (demo). Periksa email (simulasi).');
    switchTo('login');
  });
});

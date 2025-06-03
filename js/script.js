document.addEventListener('DOMContentLoaded', () => {
  const passwordField = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const loginForm = document.getElementById('login-form');
  const mainPage = document.getElementById('main-page');
  const loginContainer = document.getElementById('login-container');
  const forgotPassword = document.getElementById('forgot-password');
  const createAccountBtn = document.getElementById('create-account-btn');
  const citaLink = document.getElementById('cita-link');
  const citaFormContainer = document.getElementById('cita-form-container');
  const citaForm = document.getElementById('cita-form');
  const citaConfirmacion = document.getElementById('cita-confirmacion');

  // Mostrar / ocultar contraseña
  togglePasswordBtn.addEventListener('click', () => {
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  });

  // Validar contraseña con expresión regular
  function validarPassword(pass) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8}$/;
    return regex.test(pass);
  }

  // Login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = passwordField.value;

    if (!validarPassword(pass)) {
      alert("❌ La contraseña no cumple con los requisitos.");
      return;
    }

    // Simulación de autenticación
    alert("✅ Sesión iniciada correctamente.");
    loginContainer.classList.add('d-none');
    mainPage.classList.remove('d-none');
  });

  // Olvidé contraseña
  forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    alert("🔐 Se ha enviado un enlace de recuperación a tu correo.");
  });

  // Mostrar módulo de cita médica
  citaLink.addEventListener('click', () => {
    citaFormContainer.classList.toggle('d-none');
  });

  // Confirmar cita
  citaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const ficha = Math.floor(Math.random() * 9000 + 1000);
    const nombre = document.getElementById('dueno').value;
    const mascota = document.getElementById('mascota').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const sintomas = document.getElementById('sintomas').value;

    const mensaje = `
      ✅ Cita confirmada.<br>
      Su número de ficha es: <strong>${ficha}</strong><br>
      Día: <strong>${fecha}</strong> a las <strong>${hora}</strong>.<br>
      Dueño: ${nombre} | Mascota: ${mascota}<br>
      Síntomas: ${sintomas}
    `;

    citaConfirmacion.innerHTML = mensaje;
    citaConfirmacion.classList.remove('d-none');

    alert(`✉️ Se ha enviado un correo con la confirmación:\nFicha: ${ficha}\nFecha: ${fecha} - ${hora}`);
  });

  // Crear cuenta (simulación)
  createAccountBtn.addEventListener('click', () => {
    alert("🔧 Funcionalidad de creación de cuenta próximamente.");
  });
});

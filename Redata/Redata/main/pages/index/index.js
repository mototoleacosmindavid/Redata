/* eslint-disable camelcase */
import '../../global.css';
import './index.css';
import '../../components/forgotPasswordForm/forgotPassword.css';

import Swal from 'sweetalert2';
import {
  createForgotPasswordForm
} from '../../components/forgotPasswordForm/forgotPassword';
import {
  createRegisterForm,
  // eslint-disable-next-line no-unused-vars
  validateRegisterFormData,
} from '../../components/registerForm/registerForm';

function postData(url = '', data = {}) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    }).then(resp => resolve(resp))
      .catch(e => reject(e));
  });
}

const handleAuth = (event) => {
  event.preventDefault();

  const email = document.getElementById('#emailInput').value;
  const password = document.getElementById('#passwordInput').value;

  const url = 'http://127.0.0.1:4500/users/login';
  postData(url, {
    email,
    password
  }).then(r => {
    r.json().then(result => {
      if (result.message && result.message === 'Invalid credentials') {
        Swal.fire({
          title: 'Error!',
          text: 'Wrong username or password',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return;
      }
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.token);
      window.location.replace('/dashboard.html');
    });
  })
    .catch(e => console.log(e));
};

const handleForgotPassword = (event) => {
  event.preventDefault();

  const forgotPasswordForm = createForgotPasswordForm();

  forgotPasswordForm.addEventListener('submit', ()=> {
    const email =  document.getElementById('#recoverPasswordInput').value;

    if(email) {
      Swal.fire({
        title: 'Success',
        text: `Your password has been sent to ${email}`,
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: 'green'
      });
    }
  });

  Swal.fire({
    title: 'Forgot password?',
    showCloseButton: true,
    allowOutsideClick: false,
    showConfirmButton: false,
    html: forgotPasswordForm,
  });
};

const handleRegister = (event) => {
  event.preventDefault();

  const registerForm = createRegisterForm();

  registerForm.addEventListener('submit', ()=> {
    const email = document.getElementById('#registerEmail').value;
    const first_name = document.getElementById('#registerFirstName').value;
    const last_name = document.getElementById('#registerLastName').value;
    const reddit_username = document.getElementById('#registerRedditUsername').value;
    const reddit_password = document.getElementById('#registerRedditPassword').value;
    const password = document.getElementById('#registerPassword').value;
    const confirmPassword =
        document.getElementById('#registerConfirmPassword').value;
    if(password !== confirmPassword) {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Passwords do not match',
        confirmButtonText: 'OK',
      });
      return;
    }

    const url = 'http://127.0.0.1:4500/users/register';
    postData(url, {
      email,
      password,
      first_name,
      last_name,
      reddit_username,
      reddit_password
    })
      .then(r => {
        r.json().then(result => {
          if (result.message) {
            Swal.fire({
              title: 'Error!',
              text: result.message,
              icon: 'error',
              confirmButtonText: 'OK',
            });
            return;
          }

          console.log('@@@');
          console.log(r);
          console.log('@@@');
          localStorage.setItem('user', JSON.stringify(result.user));
          localStorage.setItem('token', result.token);
          window.location.replace('/dashboard.html');
        });
      })
      .catch(e => console.log(e));
  });

  Swal.fire({
    title: 'Create Account',
    showConfirmButton: false,
    allowOutsideClick: false,
    showCloseButton: true,
    html: registerForm,
  });
};

document
  .getElementById('#loginForm')
  .addEventListener('submit', handleAuth);

document
  .getElementById('#forgotPassword')
  .addEventListener('click', handleForgotPassword);

document
  .getElementById('#registerButton')
  .addEventListener('click', handleRegister);

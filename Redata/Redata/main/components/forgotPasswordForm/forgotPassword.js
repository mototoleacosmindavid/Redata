export function createForgotPasswordForm() {
  const forgotPasswordForm = document.createElement('form');

  forgotPasswordForm.className = 'recover-password-form';

  forgotPasswordForm.innerHTML = `
    <label for="#recoverPasswordInput" class="recover-password-label">
        Please enter your email to recover your password
    </label>
    <input 
      type="email" 
      required
      class="recover-password-input"
      placeholder="Enter your email address"
      id="#recoverPasswordInput"
    />
    <button class="login-button" type="submit">Recover Password</button> 
  `;

  return forgotPasswordForm;
}

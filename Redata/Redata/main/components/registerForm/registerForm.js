export function createRegisterForm() {
  const registerForm = document.createElement('form');

  registerForm.className = 'register-form';

  registerForm.innerHTML = `
    <div class="login-form-details-container">
      <div class="login-form-input-wrapper">
        <span class="login-form-input-icon">
           <i class="fa fa-user"></i>
        </span>
        <label for="#registerFirstName"></label>
        <input 
          type="text"
          required
          id="#registerFirstName"
          placeholder="First Name"
          minlength="3" 
          class="login-form-input-text"
        />
      </div>
      
      <div class="login-form-input-wrapper">
        <span class="login-form-input-icon">
           <i class="fa fa-user"></i>
        </span>
        <label for="#registerLastName"></label>
        <input 
          type="text"
          required
          id="#registerLastName"
          placeholder="Last Name"
          minlength="3" 
          class="login-form-input-text"
        />
      </div>
      
      
      <div class="login-form-input-wrapper">
        <span class="login-form-input-icon">
           <i class="fa fa-at"></i>
        </span>  
        <label for="#registerEmail"></label>
        <input 
            type="email"
            id="#registerEmail"
            required 
            class="login-form-input-text"
            placeholder="Email"
            >
    </div>
    
    <div class="login-form-input-wrapper">
        <span class="login-form-input-icon">
           <i class="fa fa-user"></i>
        </span>  
        <label for="#registerRedditUsername"></label>
        <input 
            type="text"
            id="#registerRedditUsername"
            required 
            class="login-form-input-text"
            placeholder="Reddit Username"
            >
    </div>
    
    <div class="login-form-input-wrapper">
      <span class="login-form-input-icon">
        <i class="fa fa-lock"></i>
      </span>  
      <label for="#registerRedditPassword"></label> 
      <input 
        type="password" 
        id="#registerRedditPassword" 
        required 
        class="login-form-input-text"
        placeholder="Reddit Password"
        minlength="8"
        maxlength="20"
      />
    </div>
    
    <div class="login-form-input-wrapper">
      <span class="login-form-input-icon">
        <i class="fa fa-lock"></i>
      </span>  
      <label for="#registerPassword"></label> 
      <input 
        type="password" 
        id="#registerPassword" 
        required 
        class="login-form-input-text"
        placeholder="Password"
        minlength="8"
        maxlength="20"
      />
    </div>
    
    <div class="login-form-input-wrapper">
      <span class="login-form-input-icon">
          <i class="fa fa-lock"></i>
      </span>  
      <label for="#registerConfirmPassword"></label> 
      <input 
         type="password"
         id="#registerConfirmPassword"
         required 
         class="login-form-input-text"
         placeholder="Confirm Password"
         minlength="8"
         maxlength="20"
      />
    </div>
  </div>
  
  <div class="login-login-button-container">
    <button 
        type="submit"
        class="login-button" 
        id="#registerButtonSubmit"
    >
        Register
    </button>
  </div>      
  `;

  return registerForm;
}

export function validateRegisterFormData(handleError) {

}

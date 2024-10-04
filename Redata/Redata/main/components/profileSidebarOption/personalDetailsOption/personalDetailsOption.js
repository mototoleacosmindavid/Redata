import './personalDetailsOption.css';

export function createPersonaDetailsOptions(user)  {
    const  {
      firstName,
      lastName,
      email,
      identificationNumber,
      dateOfBirth,
    } = user;


    const personalDetailsContainer = document.createElement('div');

    personalDetailsContainer.innerHTML  = `
        <form class="personal-details">
          <div class="input-wrapper">
            <label for="#firstName" class="personal-details-label">
                First Name:
            </label>
            <input 
                type="text"
                id="#firstName"
                name="firstName"
                class="personal-details-input-text"
                value=${firstName}
                disabled 
            >
          </div>
          
          <div class="input-wrapper">
            <label for="lastName" class="personal-details-label">
                Last Name:
            </label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                class="personal-details-input-text"
                value=${lastName}          
            >
          </div>
          
          <div class="input-wrapper">
            <label for="#email" class="personal-details-label">
                Email:
              </label>
            <input
                id="#email"
                name="email" 
                type="email"
                class="personal-details-input-text"
                value=${email}
            >
          </div>
          
          <div class="input-wrapper">
            <label for="#dateOfBirth" class="personal-details-label">
                Date of birth:
              </label>
            <input
                id="#dateOfBirth"
                name="dateOfBirth" 
                type="date"
                class="personal-details-input-text"
                value=${dateOfBirth}
                disabled
            >
          </div>
          
          <div class="input-wrapper">
            <label for="#identificationNumber" class="personal-details-label">
                Identification Number:
            </label>
            <input
                id="#identificationNumber"
                name="identificationNumber" 
                type="text"
                class="personal-details-input-text"
                value=${identificationNumber}
                disabled
            >
          </div>
          
          <button type="submit" class="update-personal-details-button">
            Update Personal Details
          </button>
          
        </form>
    `;

    return personalDetailsContainer;
}

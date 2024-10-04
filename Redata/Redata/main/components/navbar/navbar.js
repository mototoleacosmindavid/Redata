import '../../global.css';

class Navbar {
  constructor(body, userName) {
    const nav = document.createElement('nav');

    nav.innerHTML = `
      <div class="navbar-wrapper">
          <div class="navbar-logo">
            <a href="dashboard.html">
              <img 
                src="../../../assets/logo3.png" 
                alt="logo"
                class="navbar-logo-img"
               />
            </a>
          </div>
          
          <div class="navbar-icon" id="#navbarIcon">
              <span class="fa fa-bars" aria-hidden="true"></span> 
          </div>
          
 
       
         <div class="navbar-search-wrapper">
           <form action="#" class="navbar-search">
              <input 
                type="search"
                class="navbar-search-data"
                placeholder="Search" 
                required
              >
              <button type="submit" class="navbar-search-button fa fa-search"></button>
           </form>
         </div>
      </div> 
    
     <div class="navbar-profile-wrapper">
         <div class="navbar-profile-pic-wrapper">
<!--              <i class="fa fa-user" aria-hidden="true"></i>-->
                  <i class="fa fa-address-book" aria-hidden="true"></i>
         </div>
         
         <div class="navbar-profile-title">${userName}</div>
         
         <div class="navbar-profile-dropdown-icon">
              <i class="fa fa-angle-down" id="#accordion"></i> 
         </div>
         
         <div class="navbar-profile-dropdown-content" id="#dropdownContent">
            <div class="navbar-profile-dropdown-content-wrapper">
               <div class="dropdown-item">
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <a href="profile.html">Profile</a>
               </div>
               
               <div class="dropdown-item">
                    <i class="fa fa-sign-out dropdown-item-icon"></i>
                  <a id="#logout">Log out</a>
               </div>
            </div>
         </div>
     </div>
   `;

    body.insertBefore(nav, body.firstChild);
    this.dropdownAccordion = document.getElementById('#accordion');
    this.dropdownContent = document.getElementById('#dropdownContent');
    this.navbarProfile = document.querySelector('.navbar-profile-wrapper');
    this.navbarIcon = document.getElementById('#navbarIcon');
    this.navbarItems = document.getElementById('#navbarItems');
    this.logoutButton = document.getElementById('#logout');
    this.hideProfileDropDown = this.hideProfileDropDown.bind(this);
    this.showProfileDropDown = this.showProfileDropDown.bind(this);
  }

  init() {
    this.navbarProfile.addEventListener('mouseover', this.showProfileDropDown);

    this.navbarProfile.addEventListener('mouseleave', this.hideProfileDropDown);

    this.dropdownContent.addEventListener('mouseleave', this.hideProfileDropDown);

    this.navbarIcon.addEventListener('mouseover', () => {
      if(window.innerWidth < 1024) {
        this.navbarItems.style.display = 'flex';
        this.navbarIcon.style.color = '#008000';
      }
    });

    this.navbarItems.addEventListener('mouseleave', () => {
      if(window.innerWidth < 1024) {
        this.navbarItems.style.display = 'none';
        this.navbarIcon.style.color = '#000';
      }
    });

    this.logoutButton.addEventListener('click', () => {
      localStorage.removeItem('username');
      window.location.replace('/');
    });

    window.onscroll = ()=> {
      if(document.body.scrollTop> 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('nav').style.height = '80px';
        document.querySelector('.navbar-logo-img').style.height = '60px';
      } else {
        document.querySelector('nav').style.height = '100px';
        document.querySelector('.navbar-logo-img').style.height = '80px';
      }
    };
  }

  hideProfileDropDown() {
    this.dropdownAccordion.className = 'fa fa-angle-down';

    this.dropdownContent.style.display = 'none';
  };

  showProfileDropDown() {
    this.dropdownAccordion.className = 'fa fa-angle-up';

    this.dropdownContent.style.display = 'block';
  }
}

export default Navbar;

export function authorizeUser() {
  const username = localStorage.getItem('username');

  if(!username || username!=='Admin') {
    window.location.replace('/');
  }
}

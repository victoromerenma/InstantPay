const burgerMenu = document.querySelector('.menu')
const sideNav = document.querySelector('.sideBarNav')

burgerMenu.addEventListener('click', sidemenu)
function sidemenu() {
  burgerMenu.classList.toggle('open')
  sideNav.classList.toggle('active')
}

//
//
// Login Modal
//
//

const loginForm = document.getElementById('loginForm')
const password = document.querySelector('#login_Password')
const togglePassword = document.querySelector('#togglePassword')
const loginButton = document.getElementById('loginForm__Submit')
const loginErrorMsg = document.getElementById('login-error-msg')

togglePassword.addEventListener('click', function(e) {
  // toggle the type attribute
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password'
  password.setAttribute('type', type)
  // toggle the eye slash icon
  this.classList.toggle('bi-eye')
})

loginButton.addEventListener('click', e => {
  e.preventDefault()
  const username = loginForm.email_mobileNumber.value
  const password = loginForm.login_Password.value

  if (username === 'omolola.kolade@gmail.com' && password === 'Pass@123') {
    //alert('You have successfully logged in.')
    window.location.href = './dashboard.html'
  } else {
    alert('Sorry!!!.')
    // loginErrorMsg.style.opacity = 1
  }
})

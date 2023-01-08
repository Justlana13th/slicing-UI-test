const toggleButton = document.getElementsByClassName('ri-menu-line')[0]
const navbarLinks = document.getElementsByClassName('navigation')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
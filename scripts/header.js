const navMenu = document.getElementById('nav-menu')
const toggleButton = document.getElementById('toggle-btn')
const main = document.querySelector('main')
const overlay = document.createElement('div')

// overlay
overlay.classList.add('overlay')
main.appendChild(overlay)


// Event listener on the menu button
toggleButton.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex'
    overlay.classList.toggle('show')
    navMenu.style.backgroundColor = '#2E3153'
})

// This function will help to close the menu and the overlay
const closeMenu = () => {
    navMenu.style.display = 'none'
    overlay.classList.remove('show')
  }

// We add an event listener on the overlay
overlay.addEventListener('click', closeMenu)

// Écouteur d'événement sur le document pour fermer le menu si on clique en dehors
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !toggleButton.contains(event.target) && !overlay.contains(event.target)) {
    closeMenu()
  }
})
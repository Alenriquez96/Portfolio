const toggleButton = document.getElementsByClassName('burger')[0]
const navBarLinks = document.getElementsByTagName('ul') [0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})
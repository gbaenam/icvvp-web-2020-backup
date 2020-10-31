
addEventListener('DOMContentLoaded', () => {

    // Hamburger button.
    const   burgerButton = document.querySelector('.burguer-button'),
            burgerInner = document.querySelector('.burguer-inner'),
            navMain = document.getElementById('main-nav')

    burgerButton.addEventListener('click', () => {
        burgerInner.classList.toggle('cruz')
        navMain.classList.toggle('main-nav-move')
    })


    // Change menu icons.
    const   wrapperIcons = document.getElementById('wrapper-icons'),
            mobileIcons = document.createElement('div'),
            desktopIcons = document.createElement('div'),
            mediaQuery = matchMedia('(min-width: 960px)')

    mobileIcons.classList.add('mobile-icons')
    mobileIcons.id = 'mobile-icons'

    desktopIcons.classList.add('desktop-icons')
    desktopIcons.id = 'desktop-icons'


    const changeIcons = () => {


        if (mediaQuery.matches) {
            mobileIcons.remove()
            wrapperIcons.appendChild(desktopIcons)
            desktopIcons.innerHTML =    `<a href="#" class="checkin"><img src="img/icons/checkin-desk.svg" alt="Icono de registro" class="checkin__icon"></a>
                                        <a href="#" class="contact"><img src="img/icons/contact-desk.svg" alt="Icono de contacto" class="contact__icon"></a>`
        } else {
            desktopIcons.remove()
            wrapperIcons.appendChild(mobileIcons)
            mobileIcons.innerHTML =    `<a href="#" class="checkin"><img src="img/icons/checkin-mobl.svg" alt="Icono de registro" class="checkin__icon"></a>
                                        <a href="#" class="contact"><img src="img/icons/contact-mobl.svg" alt="Icono de contacto" class="contact__icon"></a>`
        }
    }

    changeIcons()

    mediaQuery.addListener(changeIcons)

})







const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')
const modeToggle = document.querySelector('#mode1');
const modeToggle1 = document.querySelector('#mode2');

//Toggle mobile menu

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
} 

menu.addEventListener('click',mobileMenu)

//show active menu when scrolling

const highlightMenu = () => {

    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')

    let scrollPos = window.scrollY

    //adds highlight class to menu items

    if (window.innerWidth >960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth >960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth >960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth >960 && scrollPos > 2345){
        servicesMenu.classList.remove('highlight')
        return
    }

    if (elem && window.innerWidth < 960 && scrollPos < 2345){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)

// closs mobile menue

const hideMobileMenu = ()=>{
    const menuBars = document.querySelector('.is-active')

    if(window.innerWidth <=960 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click',hideMobileMenu)
navLogo.addEventListener('click',hideMobileMenu)


// Swithing dark and light modes

const switchMode = (e) =>{
    e.preventDefault()

const bodyCss = document.querySelector('body');
        bodyCss.classList.toggle('light')     

}

modeToggle.addEventListener('click',switchMode)
modeToggle1.addEventListener('click',switchMode)
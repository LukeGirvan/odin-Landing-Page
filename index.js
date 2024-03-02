hamburger = {
    menuIcon: document.querySelector("#myHamburger"),
    opened:false,
    secretMenu:document.querySelector('.mobile-nav'),
    desktopNav:document.querySelector('body > header:nth-child(1) > nav:nth-child(3)')
}


hamburger.menuState = function(e){
    console.log(e.target.closest('#myHamburger'))
    
    if(e.target.closest('#myHamburger') && !hamburger.opened ){
        e.target.closest('#myHamburger').classList.add('is-active')
        hamburger.secretMenu.classList.add('is-active')
    }
    if(e.target.closest('#myHamburger') && hamburger.opened ){
        e.target.closest('#myHamburger').classList.remove('is-active')
        hamburger.secretMenu.classList.remove('is-active')
    }
    hamburger.opened = !hamburger.opened 
}

document.addEventListener('click', hamburger.menuState)



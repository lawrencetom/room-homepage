const header = document.querySelector("#header")
const btnHamburger = document.querySelector("#btnHamburger")
const arrowLeft = document.querySelector("#arrow-left")
const arrowRight = document.querySelector("#arrow-right")
const mediaQuery = window.matchMedia('(min-width: 1100px)')

function autoCloseNavMenu(w) {
    if (w.matches) { // If media query matches
        if (header.classList.contains("open")) {
            header.classList.remove("open")
        }
    } 
}

autoCloseNavMenu(mediaQuery)
mediaQuery.addListener(autoCloseNavMenu)

var i = 0
var mobileHeroImages = []
mobileHeroImages[0] = document.querySelector("#mobile-img-hero-1") 
mobileHeroImages[1] = document.querySelector("#mobile-img-hero-2") 
mobileHeroImages[2] = document.querySelector("#mobile-img-hero-3") 

var desktopHeroImages = []
desktopHeroImages[0] = document.querySelector("#desktop-img-hero-1")
desktopHeroImages[1] = document.querySelector("#desktop-img-hero-2")
desktopHeroImages[2] = document.querySelector("#desktop-img-hero-3")

var heroTexts = []
heroTexts[0] = document.querySelector("#hero-1")
heroTexts[1] = document.querySelector("#hero-2")
heroTexts[2] = document.querySelector("#hero-3")

btnHamburger.addEventListener("click", function() {
    console.log("click Hamburger")

    if (header.classList.contains("open")) {
        header.classList.remove("open")
    }
    else {
        header.classList.add("open")
    }
})

arrowLeft.addEventListener("click", function() {
    console.log("click Arrow Left")

    mobileHeroImages[i].classList.remove("visible-img")
    desktopHeroImages[i].classList.remove("visible-img")
    heroTexts[i].classList.remove("visible-text")

    if (i > 0) {
        i--
    } 
    else {
        i = mobileHeroImages.length - 1
    }

    mobileHeroImages[i].classList.add("visible-img")
    desktopHeroImages[i].classList.add("visible-img")
    heroTexts[i].classList.add("visible-text")

})

arrowRight.addEventListener("click", function() {
    console.log("click Arrow Right")

    mobileHeroImages[i].classList.remove("visible-img")
    desktopHeroImages[i].classList.remove("visible-img")
    heroTexts[i].classList.remove("visible-text")

    if (i < (mobileHeroImages.length - 1)) {
        i++
    } 
    else {
        i = 0
    }
    mobileHeroImages[i].classList.add("visible-img")
    desktopHeroImages[i].classList.add("visible-img")
    heroTexts[i].classList.add("visible-text")

})
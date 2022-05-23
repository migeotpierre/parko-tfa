import { gsap } from "gsap";

gsap.from('.introduction__texte',{
    x: -100,
    duration: 1,
    opacity: 0,

})
gsap.from('.image--introduction',{
    x: 70,
    duration: 1,
    opacity: 0,
    delay: 0.25,

})
gsap.from('.button-download',{
    duration: 0.5,
    opacity: 0,
    delay: 1.5,

})
gsap.from('.header__logo',{
    duration: 1.5,
    opacity: 0,
    delay: 2,

})




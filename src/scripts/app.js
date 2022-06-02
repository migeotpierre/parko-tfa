import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from('.introduction__texte',{
    x: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".introduction__texte",
        toggleActions: "restart none restart none"
    },


})
gsap.from('.image--introduction',{
    x: 70,
    duration: 1,
    opacity: 0,
    delay: 0.25,
    scrollTrigger: {
        trigger: ".introduction__texte",
        toggleActions: "restart none restart none"
    },

})
gsap.from('.button-download',{
    duration: 0.5,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".introduction__texte",
        toggleActions: "restart none restart none"
    },

})
gsap.from('.header__logo',{
    duration: 1.5,
    opacity: 0,
    delay: 0.3,

})

gsap.from(".image1",{

    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".image1",
        start: "center 90%",
        end:"center 50%",
        scrub: true,
    },
})
gsap.from(".image2",{
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".image2",
        start: "center 90%",
        end:"center 50%",
        scrub: true,
    },
})
gsap.from(".image3",{
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".image3",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".explication1",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".explication1",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".explication2",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".explication2",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".explication3",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".explication3",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".image4",{
    scale: 1.1,
    duration: 3,
    scrollTrigger: {
        trigger: ".image4",
        start: "center 90%",
        end:"center 10%",
        scrub: 0.5,
    },
})
gsap.from(".description__texte",{
    scale: 1.1,
    duration: 3,
    scrollTrigger: {
        trigger: ".description__texte",
        start: "center 90%",
        end:"center 10%",
        scrub: 0.5,
    },
})

// gsap.from(".section__image img",{
//     y: 250,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".section__image img",
//         start: "top 90%",
//         end:"bottom 85%",
//         scrub: 0.5,
//     },
// })









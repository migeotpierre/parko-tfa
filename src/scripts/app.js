"use strict";


import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

var intro = document.querySelector('.introduction__texte');
if(intro){
    gsap.from('.introduction__texte',{
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".introduction__texte",
            toggleActions: "restart none restart none"
        },
    })
};

var introimg = document.querySelector('.image--introduction');
if(introimg){
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
};

var boutons = document.querySelector('.button-download');
if(boutons){
    gsap.from('.button-download',{
        duration: 0.5,
        opacity: 0,
        delay: 1.5,
        scrollTrigger: {
            trigger: ".introduction__texte",
            toggleActions: "restart none restart none"
        },
    })
};


var headerlogo = document.querySelector('.header__logo');
if(headerlogo){
    gsap.from('.header__logo',{
        duration: 1.5,
        opacity: 0,
        delay: 0.3,
    })
};

var image1 = document.querySelector('.image1');
if(image1){
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
};

var image2 = document.querySelector('.image2');
if(image2){
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
};

var image3 = document.querySelector('.image3');
if(image3){
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
};

var explication1 = document.querySelector('.explication1');
if(explication1){
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
};









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
gsap.from('.title--intro',{
    x: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".title--intro",
        toggleActions: "restart none restart none"
    },
})
gsap.from('.title--intro +p',{
    duration: 1,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: ".title--intro",
        toggleActions: "restart none restart none"
    },
})
gsap.from(".image__anim",{
    scale: 1.1,
    duration: 3,
    scrollTrigger: {
        trigger: ".section__image",
        start: "-60% 10%",
        end:"60% 30%",
        scrub: 0.5,
        // markers: true,
    },
})
gsap.from(".projet__anim",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".projet__anim",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})

gsap.from(".texte__case--projet",{
    opacity: 0,
    duration: 1,
    x: 30,
    scrollTrigger: {
        trigger: ".texte__case--projet",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".v1__anim",{
    opacity: 0,
    scale: 1.5,
    duration: 3,
    scrollTrigger: {
        trigger: ".v1__anim",
        start: "center 90%",
        end:"center 10%",
        scrub: 0.5,
    },
})
gsap.from(".recherches__anim",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".recherches__anim",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".texte__case--recherches",{
    opacity: 0,
    duration: 1,
    x: 30,
    scrollTrigger: {
        trigger: ".texte__case--recherches",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})











gsap.from(".pivot__anim",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".pivot__anim",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".texte__case--pivot",{
    opacity: 0,
    duration: 1,
    x: 30,
    scrollTrigger: {
        trigger: ".texte__case--pivot",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".test__anim",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".test__anim",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".texte__case--test",{
    opacity: 0,
    duration: 1,
    x: 30,
    scrollTrigger: {
        trigger: ".texte__case--test",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".final__anim",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".final__anim",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".texte__case--final",{
    opacity: 0,
    duration: 1,
    x: 30,
    scrollTrigger: {
        trigger: ".texte__case--final",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})





















gsap.from(".developpement__anim",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".developpement__anim",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".texte__case--developpement",{
    opacity: 0,
    duration: 1,
    x: 30,
    scrollTrigger: {
        trigger: ".texte__case--developpement",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})
gsap.from(".case__probleme--1",{
    delay: 0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".case__probleme--1",
        toggleActions: "restart none restart none"
    },
})
gsap.from(".case__probleme--2",{
    delay: 0.7,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".case__probleme--2",
        toggleActions: "restart none restart none"
    },
})
gsap.from(".case__probleme--3",{
    delay: 1.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".case__probleme--3",
        toggleActions: "restart none restart none"
    },
})
gsap.from(".v2__anim",{
    opacity: 0,
    scale: 1.5,
    duration: 3,
    scrollTrigger: {
        trigger: ".v2__anim",
        start: "center 90%",
        end:"center 10%",
        scrub: 0.5,
    },
})

gsap.from(".v3__anim",{
    opacity: 0,
    scale: 1.5,
    duration: 3,
    scrollTrigger: {
        trigger: ".v3__anim",
        start: "center 90%",
        end:"center 10%",
        scrub: 0.5,
    },
})






gsap.from('.solution--1 img',{
    x: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".solution--1",
        toggleActions: "restart none none none"
    },
})
gsap.from('.solution--2 img',{
    x: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".solution--2",
        toggleActions: "restart none none none"
    },
})
gsap.from('.solution--3 img',{
    x: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".solution--3",
        toggleActions: "restart none none none"
    },
})



gsap.from(".solution--1 h3",{
    opacity: 0,
    duration: 1,
    x: -30,
    scrollTrigger: {
        trigger: ".solution--1 h3",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})

gsap.from(".solution--2 h3",{
    opacity: 0,
    duration: 1,
    x: -30,
    scrollTrigger: {
        trigger: ".solution--2 h3",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})

gsap.from(".solution--3 h3",{
    opacity: 0,
    duration: 1,
    x: -30,
    scrollTrigger: {
        trigger: ".solution--3 h3",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})



gsap.from(".solution--1 p",{
    opacity: 0,
    duration: 1,
    x: -30,
    scrollTrigger: {
        trigger: ".solution--1 p",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})

gsap.from(".solution--2 p",{
    opacity: 0,
    duration: 1,
    x: -30,
    scrollTrigger: {
        trigger: ".solution--2 p",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})

gsap.from(".solution--3 p",{
    opacity: 0,
    duration: 1,
    x: -30,
    scrollTrigger: {
        trigger: ".solution--3 p",
        start: "center 90%",
        end:"center 50%",
        scrub: 0.5,
    },
})





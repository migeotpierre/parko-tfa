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

var explication2 = document.querySelector('.explication2');
if(explication2){
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
};

var explication3 = document.querySelector('.explication3');
if(explication3){
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
};

var image4 = document.querySelector('.image4');
if(image4){
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
};


var description__texte = document.querySelector('.description__texte');
if(description__texte){
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
};

var titleintro = document.querySelector('.title--intro');
if(titleintro){
    gsap.from('.title--intro',{
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".title--intro",
            toggleActions: "restart none restart none"
        },
    })
};


var titleintrop = document.querySelector('.title--intro +p');
if(titleintrop){
    gsap.from('.title--intro +p',{
        duration: 1,
        opacity: 0,
        delay: 1,
        scrollTrigger: {
            trigger: ".title--intro",
            toggleActions: "restart none restart none"
        },
    })
};

var image__anim = document.querySelector('.image__anim');
if(image__anim){
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
};

var projet__anim = document.querySelector('.projet__anim');
if(projet__anim){
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
};


var texte__caseprojet = document.querySelector('.texte__case--projet');
if(texte__caseprojet){
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
};

var v1__anim = document.querySelector('.v1__anim');
if(v1__anim){
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
};

var recherches__anim = document.querySelector('.recherches__anim');
if(recherches__anim){
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
};

var texte__caserecherches = document.querySelector('.texte__case--recherches');
if(texte__caserecherches){
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
};

var pivot__anim = document.querySelector('.pivot__anim');
if(pivot__anim){
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
};

var texte__casepivot = document.querySelector('.texte__case--pivot');
if(texte__casepivot){
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
};

var test__anim = document.querySelector('.test__anim');
if(test__anim){
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
};

var texte__casetest = document.querySelector('.texte__case--test');
if(texte__casetest){
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
};

var final__anim = document.querySelector('.final__anim');
if(final__anim){
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
};

var texte__casefinal = document.querySelector('.texte__case--final');
if(texte__casefinal){
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
    
};

var developpement__anim = document.querySelector('.developpement__anim');
if(developpement__anim){
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
    
};

var texte__casedeveloppement = document.querySelector('.texte__case--developpement');
if(texte__casedeveloppement){
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
    
};

var case__probleme1 = document.querySelector('.case__probleme--1');
if(case__probleme1){
    gsap.from(".case__probleme--1",{
        delay: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".case__probleme--1",
            toggleActions: "restart none restart none"
        },
    })
    
};

var case__probleme2 = document.querySelector('.case__probleme--2');
if(case__probleme2){
    gsap.from(".case__probleme--2",{
        delay: 0.7,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".case__probleme--2",
            toggleActions: "restart none restart none"
        },
    })
    
};

var case__probleme3 = document.querySelector('.case__probleme--3');
if(case__probleme3){
    gsap.from(".case__probleme--3",{
        delay: 1.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".case__probleme--3",
            toggleActions: "restart none restart none"
        },
    })
    
};

var v2__anim = document.querySelector('.v2__anim');
if(v2__anim){
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
    
};

var v3__anim = document.querySelector('.v3__anim');
if(v3__anim){
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
    
};

var solution1img = document.querySelector('.solution--1 img');
if(solution1img){
    gsap.from('.solution--1 img',{
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".solution--1",
            toggleActions: "restart none none none"
        },
    })    
};

var solution2img = document.querySelector('.solution--2 img');
if(solution2img){
    gsap.from('.solution--2 img',{
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".solution--2",
            toggleActions: "restart none none none"
        },
    })    
};

var solution3img = document.querySelector('.solution--3 img');
if(solution3img){
    gsap.from('.solution--3 img',{
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".solution--3",
            toggleActions: "restart none none none"
        },
    })   
};

var solution1h3 = document.querySelector('.solution--1 h3');
if(solution1h3){
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
};


var solution2h3 = document.querySelector('.solution--2 h3');
if(solution2h3){
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
};

var solution3h3 = document.querySelector('.solution--3 h3');
if(solution3h3){
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
};

var solution1p = document.querySelector('.solution--1 p');
if(solution1p){
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
};

var solution2p = document.querySelector('.solution--2 p');
if(solution2p){
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
};

var solution3p = document.querySelector('.solution--3 p');
if(solution3p){
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
};














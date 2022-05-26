import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("#circle, .dot");

const mainTL = gsap.timeline({id: "mainTL"});

function orangeCircle(){
    let tl = gsap.timeline();
    tl.from("#circle", {duration: 0.65, scale: 0.25, transformOrigin:"center", y:-500, ease: "power4.out)"})
    .to("#circle", {duration:2, scale: 1.3, transformOrigin:"center", ease: "elastic.out(1, 0.3)"})
    ;

    return tl;
    
}

function pastaShape(){
    let tl = gsap.timeline();

    tl.to("#outline", {delay: 0.75, visibility: "visible"})
    .fromTo("#outline", {duration: 0.25, transformOrigin:"center", drawSVG: "10% 10%"},{duration: 1, drawSVG: "0% 100%"})
    .from("#outline", {duration: 0.75, fill: "#E37A30"})
    .to("#outline", {duration:1, fill:"#E3CEB0"})
    
    return tl;
    
}

function pastaOutline(){
    let tl = gsap.timeline();

    tl.from("#Vector", {duration:1, drawSVG: 0}, "outline")
    .from("#Vector_2", {duration:1, drawSVG: 0}, "outline")
    .from("#Vector_3", {duration:1, drawSVG: 0}, "outline")
    .from("#Vector_4", {duration:1, drawSVG: 0}, "outline")
    .to("#pasta", {transformOrigin: "center", duration: 1.25, delay: 1.75, rotation: 180, ease: "power4.out", repeat:-1}, "outline")
    // .from("#Frame", {transformOrigin: "center", delay: 1, ease: "back.out(1.7)", scaleY: .6, repeat: -1, yoyo: true}, "outline-=1")


    return tl;
    
}


function loadingSign(){
    let tl = gsap.timeline({repeat:-1, timeScale: 2});

    tl.from(".loading", {y:50, ease: "slow(0.5, 0, false)", visibility: "visible", stagger: {each: .03}, delay: 0},"wave")
    .to(".loading", {y:50, visibility: "visible", ease: "slow(4, 2, false)", stagger: {each: .03}, delay: 0}, "wave+=0.5")
    .to("#dot", {visibility: "hidden"})
    .to(".dot", {delay: 0, visibility: "visible", stagger: { each: 0.4 }, repeat: -1})

//     tl.fromTo(".loading", {visibility: "visible", duration: 1}, {visibility: "hidden", duration: .5})
//     .from(".loading", {y:50, skewX:50, ease: "elastic.out (2, 0.5)", visibility: "visible", stagger: {each: 0.15}})
//     .to(".loading", {delay: 0, visibility: "visible", stagger: {each: 0.3}})
//     .to(".dot", {visibility: "hidden"})
//     .to(".dot2", {delay: 0.09, visibility: "visible", stagger: { each: 0.440 }, repeat: -1})

}



mainTL
.add(orangeCircle(), "animate")
.add(pastaShape(), "animate+=0.25")
.add(pastaOutline({visibility: "visible"}),"animate+=0.65")
.add(loadingSign({visibility:"visible"}),"animate+=0.75")
.to("#details", {visibility: "visible"}, "animate+=0.85")

;
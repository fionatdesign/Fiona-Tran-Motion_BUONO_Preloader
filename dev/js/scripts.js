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

    tl.from("#circle", {duration:2, scale: 0.25, transformOrigin:"center", ease: "elastic.out(1, 0.3)"})
    ;

    return tl;
    
}

function pastaShape(){
    let tl = gsap.timeline();

    tl.to("#outline", {visibility: "visible"})
    .fromTo("#outline", {duration:1, transformOrigin:"center", drawSVG: "10% 10%"},{duration: 1, drawSVG: "0% 100%"})
    .from("#outline", {duration:1, fill: "#E37A30"})
    .to("#outline", {duration:1, fill:"#E3CEB0"})

    return tl;
    
}

function pastaOutline(){
    let tl = gsap.timeline();

    tl.from("#Vector", {duration:.75, drawSVG: 0}, "outline")
    .from("#Vector_2", {duration:.75, drawSVG: 0}, "outline")
    .from("#Vector_3", {duration:.75, drawSVG: 0}, "outline")
    .from("#Vector_4", {duration:.75, drawSVG: 0}, "outline")
    ;

    return tl;
    
}

function loadingSign(){
    let tl = gsap.timeline();

    tl.to(".loading", {visibility: "hidden", duration: 2})
    tl.from(".loading", {y:50, skewX:30, ease: "elastic.out (2, 0.5)", visibility: "visible", stagger: {each: 0.3}})
    tl.to(".loading", {delay: 3.5, visibility: "visible", stagger: {each: 0.3}})

}


mainTL.add(orangeCircle(), "animate")
.add(pastaShape(), "animate+=0.75")
.add(pastaOutline({visibility: "visible"}),"animate+=0.85")
.to("#details", {visibility: "visible"}, "animate+=0.84")
.to("#pasta", {transformOrigin: "center", duration: 1.25, ease: "power3.out", rotation: 180, repeat: -1},"animate+=4")
.add(loadingSign())
.to(".dot", {visibility: "hidden"})
.to(".dot2", {visibility: "visible", stagger: { each: 0.4 }, delay: 0, repeat: -1})

;

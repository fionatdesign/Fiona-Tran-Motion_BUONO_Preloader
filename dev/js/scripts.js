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

    tl.from("#circle", {duration:2, scale: 0.5, transformOrigin:"center", ease: "elastic.out(1, 0.3)"})
    ;

    return tl;
    
}

function pastaShape(){
    let tl = gsap.timeline();

    tl.to("#outline", {visibility: "visible"})
    .from("#outline", {duration:1, transformOrigin:"center", drawSVG: "50% 50%"})
    .from("#outline", {duration:1, fill: "#E37A30"})
    .to("#outline", {duration:1, fill:"#E3CEB0"})

    return tl;
    
}

function pastaOutline(){
    let tl = gsap.timeline();

    tl.from("#Vector", {duration:1, drawSVG: 0}, "outline")
    .from("#Vector_2", {duration:1, drawSVG: 0}, "outline")
    .from("#Vector_3", {duration:1, drawSVG: 0}, "outline")
    .from("#Vector_4", {duration:1, drawSVG: 0}, "outline")
    ;

    return tl;
    
}

function loadingSign(){
    let tl = gsap.timeline();

    tl.to("#L", {visibility: "visible", delay: 3.5}, "loading")
    tl.to("#O", {visibility: "visible", delay: 3.7}, "loading")
    tl.to("#A", {visibility: "visible", delay: 3.9}, "loading")
    tl.to("#D", {visibility: "visible", delay: 4.1}, "loading")
    tl.to("#I", {visibility: "visible", delay: 4.3}, "loading")
    tl.to("#N", {visibility: "visible", delay: 4.5}, "loading")
    tl.to("#G", {visibility: "visible", delay: 4.7}, "loading")
    tl.to(".dot", {visibility: "visible", stagger: { each: 0.3 }, duration: 0.3, delay: 4.9, repeat: 3}, "loading")
    // tl.to("#dot1", {visibility: "visible", delay: 4.9}, "loading")
    // tl.to("#dot2", {visibility: "visible", delay: 5.1}, "loading")
    // tl.to("#dot3", {visibility: "visible", delay: 5.3}, "loading")
}


mainTL.add(orangeCircle(), "animate")
.add(pastaShape(), "animate+=0.75")
.add(pastaOutline({visibility: "visible"}),"animate+=0.85")
.to("#details", {visibility: "visible"}, "animate+=0.84")
.to("#pasta", {transformOrigin: "center", duration: 1.25, ease: "power3.out", rotation: 180, repeat: 3},"animate+=3.5")
.add(loadingSign())


;

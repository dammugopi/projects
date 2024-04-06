const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity: 0,
        duration:1.8,
        ease: Expo.easeInOut

    })
    .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration:2,
        delay :-1,
        stagger: .2

    })
    .from("#herofooter",{
        y:-10,
        opacity: 0,
        duration:1,
        delay: -.5,
        ease: Expo.easeInOut

    })
}
var timeout;
function circleChaptakaro(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){

        this.clearTimeout(timeout)
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY-yprev);
        xscale = gsap.utils.clamp(.8,1.2,dets.clientX-xprev);

        xprev=dets.clientX;
        yprev=dets.clientY;
        
        circleMouseFollower(xscale,yscale);

        timeout=setTimeout(function(){
            document.querySelector("#minicircle").style.transform=` translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
  
        },100);
    });
}
circleChaptakaro();
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
     document.querySelector("#minicircle").style.transform=` translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
circleChaptakaro();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate =0;
    var diffrote = 0;

    elem.addEventListener("mousemove",function(dets){
        var diff= dets.clientY - elem.getBoundingClientRect().top;
        diffrote = dets.clientX - rotate;
        rotate = dets.clientX
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power1,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrote)

        });
    });
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
             
        });
    });
});

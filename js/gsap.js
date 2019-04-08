var tlGeneral = new TimelineMax({ repeat: -1, repeatDelay: 1 });
// 1st Btn
tlGeneral.to(".btn.no1", .2, { 
    opacity: 9, 
    scaleX: 1.2, 
    scaleY: 1.2, 
    ease: Bounce.easeOut,
    transformOrigin: "50% 50%" 
},0 )
.to(".btn.no1", .5, { opacity: 0, }, .2);

// 2nd Btn
tlGeneral.to(".btn.no5", 1, { 
    opacity: 9, 
    scaleX: 1.2, 
    scaleY: 1.2, 
    ease: Bounce.easeOut, 
    transformOrigin: "50% 50%" 
},0 )
.to(".btn.no5", .5, { opacity: 0, }, 1);
var tlGeneral = new TimelineMax({ repeat: -1, repeatDelay: 1 });
// 1st Btn
tlGeneral.to(".btn.no1", .2, { 
    opacity: .5, 
    ease: Back.easeOut,
    transformOrigin: "50% 50%" 
}, "+=1")
.to(".btn.no1", .2, { opacity: 0 }, "+=1");

// 2nd Btn
tlGeneral.to(".btn.no3", .2, { 
    opacity: .5, 
    ease: Bounce.easeOut, 
    transformOrigin: "50% 50%" 
}, "+=1")
.to(".btn.no3", .2, { opacity: 0 }, "+=1" );

// 3rd Btn
tlGeneral.to(".btn.no9", .2, { 
    opacity: .5, 
    ease: Bounce.easeOut, 
    transformOrigin: "50% 50%" 
}, "+=1" )
.to(".btn.no9", 1, { opacity: 0 }, "+=1");

// 4th Btn
tlGeneral.to(".btn.no9", .2, { 
    opacity: .5, 
    ease: Bounce.easeOut, 
    transformOrigin: "50% 50%",
}, "+=1" )
.to(".btn.no9", .2, { opacity: 0 }, "+=1");
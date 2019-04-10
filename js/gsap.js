var tlGeneral = new TimelineMax({ repeat: -1, repeatDelay: 1 });
// 1st Btn
tlGeneral.to(".btn.no1", .2, { 
    opacity: .5, 
    ease: Back.easeOut,
    transformOrigin: "50% 50%" 
}, "+=.2")
.to(".num.no1", .2, { opacity:1 } /* "+=.2" */)
.to(".btn.no1", .2, { opacity: 0, scaleY:0, scaleX:0 })

// 2nd Btn
.to(".btn.no3", .2, { 
    opacity: .5, 
    ease: Bounce.easeOut, 
    transformOrigin: "50% 50%" 
}, "+=.2")
.to(".num.no3", .2, { opacity:1 } /* "+=.2" */)
.to(".btn.no3", .2, { opacity: 0, scaleY:0, scaleX:0 })

// 3rd Btn
.to(".btn.no9", .2, { 
    opacity: .5, 
    ease: Bounce.easeOut, 
    transformOrigin: "50% 50%" 
}, "+=.2" )
.to(".num.no9", .2, { opacity:1 } /* "+=.2" */)
.to(".btn.no9", .2, { opacity: 0, scaleY: 0, scaleX: 0 })
.to(".btn.no9", .2, { scaleY: 1, scaleX: 1 })

// 4th Btn
.to(".btn.no9", .2, { 
    opacity: .5, 
    ease: Bounce.easeOut, 
    transformOrigin: "50% 50%",
})
.to(".num.no9-1", .2, { opacity:1 } /* "+=.2" */)
.to(".btn.no9", .2, { opacity: 0, scaleY: 0, scaleX: 0 });
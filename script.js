gsap.to("#logo-overlay img",{
    opacity:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 5%",
        end:"top 2%",
        scrub:5
    }
})
gsap.to("#logo-overlay img",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        // markers:true,
        start:"top 5%",
        end:"top -10%",
        scrub:3
    }
})
gsap.to("#logo-overlay img",{
    opacity:1,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"body",
        // markers:true,
        start:"top 15%",
        end:"top -10%",
        scrub:3
    }
})
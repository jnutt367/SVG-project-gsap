//https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com

var tl = gsap.timeline({ defaults: { duration: .7, opacity: 0, scale: 2.5, ease: "back" } });

function init() {
    tl.from("#demo", { ease: "linear", autoAlpha: 0 })
        .from("h1", { x: 80, duration: 1 })
        .from("h2", { x: -150, duration: 1 }, "<")
        .from("p", { y: 300 })
        .from("button", { y: 60 })
        .from("#items > g", { scale: 0, opacity: 0, ease: "elastic", transformOrigin: "50% 50%", stagger: .3 }, "-=0.7")
        .from("#ball", { duration: 3, scale: "1.2" })
        .from("#basketball", { scale: "1.5" }, "-=2.5")
}

window.addEventListener("load", function(event) {
    init(); //do stuff
});
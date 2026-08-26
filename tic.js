/* =========================================
   ORDER CONFIRMATION ANIMATION
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const truck = document.querySelector(".truck");

const shutter = document.querySelector(".shutter");

const parcel = document.querySelector(".parcel");

const successCard =
    document.querySelector(".success-card");

const successIcon =
    document.querySelector(".success-icon");

const wheelInner =
    document.querySelectorAll(".wheel-inner");

const speedLines =
    document.querySelector(".speed-lines");

const roadLines =
    document.querySelectorAll(".road-line");

const statusText =
    document.querySelector("#statusText");

const orderButton =
    document.querySelector("#orderButton");


/* =========================================
   INITIAL POSITION
========================================= */


/*
    Truck screen ke bahar left side se start hoga.
*/

gsap.set(truck, {

    x: -380

});


/*
    Success card initially hidden.
*/

gsap.set(successCard, {

    opacity: 0,

    scale: .65,

    xPercent: -50,

    yPercent: -50

});


/*
    Parcel initially hidden.
*/

gsap.set(parcel, {

    opacity: 0,

    y: -10,

    scale: .6

});


/*
    Shutter closed.
*/

gsap.set(shutter, {

    height: 58,

    y: 0

});


/*
    Speed lines hidden.
*/

gsap.set(speedLines, {

    opacity: 0

});


/* =========================================
   TIMELINE
========================================= */

const animation = gsap.timeline({

    paused: true,

    defaults: {

        ease: "power2.out"

    }

});


/* =========================================
   STEP 1
   TRUCK ENTER
========================================= */

animation.to(truck, {

    x: 0,

    duration: 2.2,

    ease: "power3.out",

    onStart: () => {

        statusText.textContent =
            "Your delivery is arriving...";

    }

});


/* =========================================
   STEP 2
   WHEELS ROTATE
========================================= */

animation.to(

    wheelInner,

    {

        rotation: 720,

        duration: 2.2,

        ease: "none"

    },

    "<"

);


/* =========================================
   STEP 3
   SPEED LINES
========================================= */

animation.to(

    speedLines,

    {

        opacity: .8,

        duration: .3

    },

    "-=1.7"

);


/* Speed lines disappear */

animation.to(

    speedLines,

    {

        opacity: 0,

        duration: .4

    }

);


/* =========================================
   STEP 4
   TRUCK STOPS
========================================= */

animation.to(truck, {

    x: 20,

    duration: .25,

    ease: "power2.out"

});


/* =========================================
   STEP 5
   SHUTTER OPENS
========================================= */

animation.to(shutter, {

    height: 0,

    duration: .9,

    ease: "power2.inOut",

    onStart: () => {

        statusText.textContent =
            "Preparing your package...";

    }

});


/* =========================================
   STEP 6
   PARCEL COMES OUT
========================================= */

animation.to(parcel, {

    opacity: 1,

    y: 18,

    scale: 1,

    duration: .6,

    ease: "back.out(1.8)"

});


/* =========================================
   STEP 7
   PARCEL DROP
========================================= */

animation.to(parcel, {

    y: 35,

    duration: .55,

    ease: "bounce.out"

});


/* =========================================
   STEP 8
   SMALL PAUSE
========================================= */

animation.to({}, {

    duration: .4

});


/* =========================================
   STEP 9
   SUCCESS CARD APPEARS
========================================= */

animation.to(successCard, {

    opacity: 1,

    scale: 1,

    duration: .8,

    ease: "back.out(1.8)",

    onStart: () => {

        statusText.textContent =
            "Order delivered successfully ✓";

    }

});


/* =========================================
   STEP 10
   CHECK ICON
========================================= */

animation.fromTo(

    successIcon,

    {

        scale: 0,

        rotation: -100

    },

    {

        scale: 1,

        rotation: 0,

        duration: .65,

        ease: "back.out(2)"

    },

    "-=.55"

);


/* =========================================
   STEP 11
   SUCCESS CARD LITTLE BOUNCE
========================================= */

animation.to(

    successCard,

    {

        y: -5,

        duration: .35,

        ease: "power1.out"

    }

);


/* Return */

animation.to(

    successCard,

    {

        y: 0,

        duration: .35,

        ease: "power1.inOut"

    }

);


/* =========================================
   STEP 12
   WAIT
========================================= */

animation.to({}, {

    duration: 2

});


/* =========================================
   STEP 13
   SUCCESS CARD DISAPPEARS
========================================= */

animation.to(successCard, {

    opacity: 0,

    scale: .7,

    duration: .6,

    ease: "power2.in",

    onStart: () => {

        statusText.textContent =
            "Thank you! See you again.";

    }

});


/* =========================================
   STEP 14
   SHUTTER CLOSE
========================================= */

animation.to(shutter, {

    height: 58,

    duration: .7,

    ease: "power2.inOut"

});


/* =========================================
   STEP 15
   PARCEL DISAPPEAR
========================================= */

animation.to(parcel, {

    opacity: 0,

    scale: .6,

    duration: .3

});


/* =========================================
   STEP 16
   TRUCK GOES RIGHT
========================================= */

animation.to(truck, {

    x: window.innerWidth + 450,

    duration: 2.5,

    ease: "power3.in",

    onStart: () => {

        statusText.textContent =
            "Delivery completed ✓";

    }

});


/* =========================================
   STEP 17
   RESET
========================================= */

animation.set(truck, {

    x: -380

});


animation.set(successCard, {

    opacity: 0,

    scale: .65

});


animation.set(parcel, {

    opacity: 0,

    y: -10,

    scale: .6

});


animation.set(shutter, {

    height: 58

});


/* =========================================
   START FUNCTION
========================================= */

function startAnimation() {

    /*
        Agar animation already running hai
        to usko restart karenge.
    */

    animation.restart();

}


/* =========================================
   BUTTON CLICK
========================================= */

orderButton.addEventListener(

    "click",

    startAnimation

);


/* =========================================
   AUTO START
========================================= */

window.addEventListener(

    "load",

    () => {

        setTimeout(

            () => {

                startAnimation();

            },

            800

        );

    }

);


/* =========================================
   RESPONSIVE TRUCK RESET
========================================= */

window.addEventListener(

    "resize",

    () => {

        /*
            Agar animation complete hone ke baad
            window resize ho to kuch issue na ho.
        */

        if (
            animation.progress() === 0
        ) {

            gsap.set(truck, {

                x: -380

            });

        }

    }

);
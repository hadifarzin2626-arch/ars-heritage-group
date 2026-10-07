/* =========================================================
   ARS SIGNATURE — HERO INTERACTION
   DESIGN 02 — CINEMATIC INTELLIGENCE FIELD
   ========================================================= */

(function () {

    const hero =
        document.querySelector(".signature-hero");

    if (!hero) return;


    const background =
        hero.querySelector(".signature-hero-background");

    const grid =
        hero.querySelector(".signature-hero-grid");

    const mark =
        hero.querySelector(".signature-mark");

    const enter =
        hero.querySelector(".signature-hero-enter");


    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    let pointerX = 0;
    let pointerY = 0;

    let active = false;


    /* =====================================================
       CLAMP
       ===================================================== */

    function clamp(value, min, max) {

        return Math.max(
            min,
            Math.min(max, value)
        );

    }


    /* =====================================================
       MAGNETIC MOVEMENT
       ===================================================== */

    function magneticMove(
        element,
        strength,
        x,
        y
    ) {

        if (!element) return;


        const rect =
            element.getBoundingClientRect();


        const centerX =
            rect.left +
            rect.width / 2;


        const centerY =
            rect.top +
            rect.height / 2;


        const distanceX =
            x - centerX;


        const distanceY =
            y - centerY;


        const distance =
            Math.sqrt(
                distanceX * distanceX +
                distanceY * distanceY
            );


        const radius = 180;


        if (distance > radius) {

            element.style.setProperty(
                "--mag-x",
                "0px"
            );

            element.style.setProperty(
                "--mag-y",
                "0px"
            );

            return;

        }


        const influence =
            1 - distance / radius;


        const moveX =
            clamp(
                distanceX *
                influence *
                .018 *
                strength,

                -3,
                3
            );


        const moveY =
            clamp(
                distanceY *
                influence *
                .018 *
                strength,

                -3,
                3
            );


        element.style.setProperty(
            "--mag-x",
            `${moveX}px`
        );


        element.style.setProperty(
            "--mag-y",
            `${moveY}px`
        );

    }


    /* =====================================================
       ANIMATION LOOP
       ===================================================== */

    function animate() {


        currentX +=
            (targetX - currentX) *
            .075;


        currentY +=
            (targetY - currentY) *
            .075;


        /* -----------------------------------------------
           BACKGROUND
           ----------------------------------------------- */

        if (background) {

            background.style.setProperty(
                "--unused",
                "0"
            );

            hero.style.setProperty(
                "--hero-parallax-x",
                `${currentX * -0.85}px`
            );

            hero.style.setProperty(
                "--hero-parallax-y",
                `${currentY * -0.85}px`
            );

        }


        /* -----------------------------------------------
           GRID
           ----------------------------------------------- */

        if (grid) {

            grid.style.transform =
                `translate3d(
                    ${currentX * .22}px,
                    ${currentY * .22}px,
                    0
                )`;

        }


        /* -----------------------------------------------
           LIGHT FIELD
           ----------------------------------------------- */

        const lightX =
            50 +
            currentX * 1.8;


        const lightY =
            50 +
            currentY * 1.8;


        hero.style.setProperty(
            "--hero-light-x",
            `${lightX}%`
        );


        hero.style.setProperty(
            "--hero-light-y",
            `${lightY}%`
        );


        /* -----------------------------------------------
           MAGNETIC UI
           ----------------------------------------------- */

        if (active) {

            if (mark) {

                magneticMove(
                    mark,
                    .55,
                    pointerX,
                    pointerY
                );

            }


            if (enter) {

                magneticMove(
                    enter,
                    1.0,
                    pointerX,
                    pointerY
                );

            }

        }


        requestAnimationFrame(animate);

    }


    /* =====================================================
       POINTER MOVE
       ===================================================== */

    hero.addEventListener(
        "pointermove",
        function (event) {


            const rect =
                hero.getBoundingClientRect();


            const normalizedX =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width;


            const normalizedY =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height;


            targetX =
                clamp(
                    (normalizedX - .5) * 5,
                    -2.5,
                    2.5
                );


            targetY =
                clamp(
                    (normalizedY - .5) * 3.8,
                    -1.9,
                    1.9
                );


            pointerX =
                event.clientX;


            pointerY =
                event.clientY;


            active = true;


            hero.classList.add(
                "signature-hero-active"
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       POINTER ENTER
       ===================================================== */

    hero.addEventListener(
        "pointerenter",
        function () {

            active = true;

            hero.classList.add(
                "signature-hero-active"
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       POINTER LEAVE
       ===================================================== */

    hero.addEventListener(
        "pointerleave",
        function () {


            active = false;


            targetX = 0;
            targetY = 0;


            hero.classList.remove(
                "signature-hero-active"
            );


            if (mark) {

                mark.style.setProperty(
                    "--mag-x",
                    "0px"
                );

                mark.style.setProperty(
                    "--mag-y",
                    "0px"
                );

            }


            if (enter) {

                enter.style.setProperty(
                    "--mag-x",
                    "0px"
                );

                enter.style.setProperty(
                    "--mag-y",
                    "0px"
                );

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH
       ===================================================== */

    hero.addEventListener(
        "touchmove",
        function (event) {


            if (!event.touches.length) return;


            const touch =
                event.touches[0];


            const rect =
                hero.getBoundingClientRect();


            const normalizedX =
                (
                    touch.clientX -
                    rect.left
                ) /
                rect.width;


            const normalizedY =
                (
                    touch.clientY -
                    rect.top
                ) /
                rect.height;


            targetX =
                clamp(
                    (normalizedX - .5) * 4,
                    -2,
                    2
                );


            targetY =
                clamp(
                    (normalizedY - .5) * 3,
                    -1.5,
                    1.5
                );


            pointerX =
                touch.clientX;


            pointerY =
                touch.clientY;


            active = true;


            hero.classList.add(
                "signature-hero-active"
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH END
       ===================================================== */

    hero.addEventListener(
        "touchend",
        function () {


            active = false;


            targetX = 0;
            targetY = 0;


            hero.classList.remove(
                "signature-hero-active"
            );


            if (mark) {

                mark.style.setProperty(
                    "--mag-x",
                    "0px"
                );

                mark.style.setProperty(
                    "--mag-y",
                    "0px"
                );

            }


            if (enter) {

                enter.style.setProperty(
                    "--mag-x",
                    "0px"
                );

                enter.style.setProperty(
                    "--mag-y",
                    "0px"
                );

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       START
       ===================================================== */

    requestAnimationFrame(animate);

})();

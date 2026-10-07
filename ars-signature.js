/* =========================================================
   ARS SIGNATURE — HERO
   DESIGN 02 — PURE CINEMATIC FIELD
   ========================================================= */

(function () {

    const hero = document.querySelector(".signature-hero");

    if (!hero) return;

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    function animate() {

        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;

        hero.style.setProperty(
            "--hero-x",
            `${currentX}px`
        );

        hero.style.setProperty(
            "--hero-y",
            `${currentY}px`
        );

        hero.style.setProperty(
            "--light-x",
            `${50 + currentX * 2}%`
        );

        hero.style.setProperty(
            "--light-y",
            `${50 + currentY * 2}%`
        );

        requestAnimationFrame(animate);
    }

    hero.addEventListener(
        "pointermove",
        function (event) {

            const rect = hero.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            targetX = (x - 0.5) * 3;
            targetY = (y - 0.5) * 2;

        },
        { passive: true }
    );

    hero.addEventListener(
        "pointerleave",
        function () {

            targetX = 0;
            targetY = 0;

        },
        { passive: true }
    );

    requestAnimationFrame(animate);

})();

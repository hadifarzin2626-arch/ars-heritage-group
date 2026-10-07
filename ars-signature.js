/* ===================================================== */
/* ARS SIGNATURE — HERO */
/* SIGNATURE REVEAL — DESIGN 03 */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".signature-hero");

    if (!hero) return;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            hero.classList.add("signature-reveal-active");
        });
    });

});

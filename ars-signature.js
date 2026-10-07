document.body.setAttribute(
    "data-ars-js-test",
    "LOADED"
);

document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <div style="
        position:fixed;
        top:20px;
        left:20px;
        z-index:999999;
        padding:12px 18px;
        background:#111;
        color:#39B5FF;
        border:1px solid #39B5FF;
        font-family:Arial,sans-serif;
        font-size:14px;
        letter-spacing:2px;
    ">
        ARS JS LOADED
    </div>
    `
);

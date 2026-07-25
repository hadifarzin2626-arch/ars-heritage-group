/* =========================================================
   ARS GLOBAL ENERGY V8
   CARD ACTIVATION ENGINE
   ========================================================= */

(function(){

    "use strict";


    /* =====================================================
       01. CARD SELECTOR
       ===================================================== */

    const cardSelector = [

        ".ars-group-page .ars-glass",

        ".mission-card",
        ".value-card",
        ".vision-card",
        ".dna-card",
        ".leader-card",
        ".partner-card",
        ".standard-card",
        ".timeline-card",
        ".gallery-card",
        ".future-card",
        ".stat-card",
        ".country-card",
        ".eco",
        ".org-card"

    ].join(",");


    /* =====================================================
       02. GET ALL CARDS
       ===================================================== */

    const cards = document.querySelectorAll(
        cardSelector
    );


    if(!cards.length){

        return;

    }


    /* =====================================================
       03. ACTIVATE CARD
       ===================================================== */

    cards.forEach(function(card){

        card.addEventListener(
            "click",
            function(event){

                /*
                 Prevent click from bubbling
                 جلوگیری از انتشار کلیک
                */

                event.stopPropagation();


                /*
                 Remove active state
                 از بین بردن کارت فعال قبلی
                */

                cards.forEach(function(otherCard){

                    if(
                        otherCard !== card
                    ){

                        otherCard.classList.remove(
                            "ars-card-active"
                        );

                    }

                });


                /*
                 Toggle selected card
                 فعال / غیرفعال کردن کارت انتخاب‌شده
                */

                card.classList.toggle(
                    "ars-card-active"
                );

            },
            false
        );

    });


    /* =====================================================
       04. CLOSE ACTIVE CARD
       04. بستن کارت فعال با کلیک بیرون
       ===================================================== */

    document.addEventListener(
        "click",
        function(){

            cards.forEach(function(card){

                card.classList.remove(
                    "ars-card-active"
                );

            });

        },
        false
    );


    /* =====================================================
       05. ESCAPE KEY
       05. بستن کارت با ESC
       ===================================================== */

    document.addEventListener(
        "keydown",
        function(event){

            if(
                event.key === "Escape"
            ){

                cards.forEach(function(card){

                    card.classList.remove(
                        "ars-card-active"
                    );

                });

            }

        },
        false
    );


})();

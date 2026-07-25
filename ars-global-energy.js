/* =========================================================
   ARS CARD INTERACTION SYSTEM V9
   Premium Click Interaction
   ---------------------------------------------------------
   Controls ONLY:
   .ars-glass

   Does NOT control:
   - body
   - html
   - page scroll
   - global energy
   - page background
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        /* =================================================
           01. FIND ALL ARS CARDS
           ================================================= */

        const cards = document.querySelectorAll(
            ".ars-glass"
        );


        /* =================================================
           02. IF NO CARDS EXIST
           ================================================= */

        if(!cards.length){

            return;

        }


        /* =================================================
           03. CREATE ARS IDENTITY
           ================================================= */

        function createARSIdentity(card){

            const oldIdentity =
                card.querySelector(
                    ".ars-card-identity"
                );


            if(oldIdentity){

                oldIdentity.remove();

            }


            const identity =
                document.createElement(
                    "div"
                );


            identity.className =
                "ars-card-identity";


            identity.textContent =
                "ARS";


            card.appendChild(
                identity
            );


            identity.addEventListener(
                "animationend",
                function(){

                    if(identity.parentNode){

                        identity.remove();

                    }

                },
                {
                    once:true
                }
            );

        }


        /* =================================================
           04. RESET OTHER CARDS
           ================================================= */

        function resetOtherCards(activeCard){

            cards.forEach(
                function(card){

                    if(card !== activeCard){

                        card.classList.remove(
                            "is-selected"
                        );


                        const identity =
                            card.querySelector(
                                ".ars-card-identity"
                            );


                        if(identity){

                            identity.remove();

                        }

                    }

                }
            );

        }


        /* =================================================
           05. CARD CLICK
           ================================================= */

        cards.forEach(
            function(card){

                card.addEventListener(
                    "click",
                    function(event){

                        /*
                         * If the user clicked an actual link
                         * inside the card, preserve its
                         * original browser behaviour.
                         */

                        const clickedLink =
                            event.target.closest(
                                "a"
                            );


                        /*
                         * If the card itself is an anchor,
                         * allow its native navigation.
                         */

                        if(
                            card.tagName.toLowerCase()
                            === "a"
                        ){

                            resetOtherCards(
                                card
                            );


                            card.classList.add(
                                "is-selected"
                            );


                            createARSIdentity(
                                card
                            );


                            return;

                        }


                        /*
                         * If a child link was clicked,
                         * do not interfere with it.
                         */

                        if(
                            clickedLink
                            &&
                            clickedLink !== card
                        ){

                            return;

                        }


                        /*
                         * If this card is already selected,
                         * clicking again resets it.
                         */

                        if(
                            card.classList.contains(
                                "is-selected"
                            )
                        ){

                            card.classList.remove(
                                "is-selected"
                            );


                            const identity =
                                card.querySelector(
                                    ".ars-card-identity"
                                );


                            if(identity){

                                identity.remove();

                            }


                            return;

                        }


                        /*
                         * Reset previously selected card.
                         */

                        resetOtherCards(
                            card
                        );


                        /*
                         * Activate current card.
                         */

                        card.classList.add(
                            "is-selected"
                        );


                        /*
                         * Trigger ARS animation.
                         */

                        createARSIdentity(
                            card
                        );

                    }
                );

            }
        );

    }
);

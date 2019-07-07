/**
 * @file Implementation of the recomposts block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the recomposts block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here
    $('.recomposts__slider').slick({
        infinite: true,
        autoplay: true,
        // arrows: true,
        // dots: true,
        // vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dotsClass: "my-dots",
        nextArrow: $('.next-arrow'),
        prevArrow: $('.prev-arrow'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: false
                }
            },
        ]
    });
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};

/**
 * @file Implementation of the content block
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
 * Initialize the content block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here







    const $container = $('#masonry-grid');

    $container.imagesLoaded(() => {
        $container.masonry({

            itemSelector: '.grid-item',



        });
    });

    const YTPlayer = require('yt-player');

    if ($('#player').length) {
        const player = new YTPlayer('#player');

        player.load('0hJZ7sxD8MY');
        player.setVolume(100);

        player.on('playing', () => {
            console.log(player.getDuration()) // => 351.521
        });
    }
    

    $('.content__windowSlider').slick({
        rows: 2,
        slidesToShow: 1,
        arrows: false,
        slidesPerRow: 2,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};

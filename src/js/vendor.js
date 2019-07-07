import jQuery from 'jquery';
import svg4everybody from 'svg4everybody';
import jQueryBridget from'jquery-bridget';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import 'imagefill';
import 'yt-player';
import 'create-youtube-player';
import 'slick-carousel';
import '@fortawesome/fontawesome-free';
import 'google-maps';


// Expose libraries to global Window object
window.$ = window.jQuery = jQuery;
jQueryBridget('masonry', Masonry, $);
jQueryBridget( 'imagesLoaded', imagesLoaded, $ );
// Manually initialize third-party libraries
svg4everybody();
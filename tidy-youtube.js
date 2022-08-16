// ==UserScript==
// @name YouTube Hide recommended videos
// @description Hides the recommended videos on your stream (new design)
// @include *://youtube.com/*
// @include *://*.youtube.com/*
// @copyright 2022 iakovgan
// ==/UserScript==
// @inspiredBy https://greasyfork.org/scripts/4246-youtube-hide-recommended-videos

window.setTimeout(
function check() {
if (document.getElementsByClassName('shelf-title-annotation')) {
 main();
}
window.setTimeout(check, 250);
}, 250
);

function main() {
var AggroText = "Все видео";

    /*
If you need to add your language, add this block to "case" statement
and copy-paste text of "Popular channel you might like" span to it:

case TEXT_AT_BUTTON_IN_FOOTER_OF_MAIN_PAGE:
var AggroText = LOCALIZED_STRING_OF_"Popular channel you might like"
break;
*/
   if (1) {
       var TitleAnnotations = document.getElementsByClassName('yt-chip-cloud-chip-renderer');
       for(var i = 0, len = TitleAnnotations.length; i < len; i++) {
           if (TitleAnnotations[i].innerText == "Все видео") {
               TitleAnnotations[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
           }
       };
    };

   if (1) {
    var TitleAnnotations = document.getElementsByClassName('ytd-feed-filter-chip-bar-renderer');
    for(var i = 0, len = TitleAnnotations.length; i < len; i++) {
        if (TitleAnnotations[i].innerText == "Все") {
            TitleAnnotations[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }
    }
   }


   if (1) {
    var TitleAnnotations = document.getElementsByClassName('ytd-guide-entry-renderer');
    for(var i = 0, len = TitleAnnotations.length; i < len; i++) {
        if (TitleAnnotations[i].innerText != "Главная") {
            TitleAnnotations[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }
    }
   }


} /* end of main() */

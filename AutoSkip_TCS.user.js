// ==UserScript==
// @name         AutoSkip TCS iON Videos
// @version      1.0
// @description  Automatically skips to the next video on TCS iON Hub.
// @author       IndexPosition
// @match        https://learning.tcsionhub.in/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function clickButtonWhenVisible() {
        const button = document.getElementById('btnNext');

        if (button && isElementInViewport(button)) {
            button.click();
        }
    }

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    setInterval(clickButtonWhenVisible, 1000);

})();

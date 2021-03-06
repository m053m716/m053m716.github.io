"use strict";

(function() {
    // overridden template parameters
    var researcherID = 'AAQ-4254-2021';
    var badgeId = 'badgeCont127';
    var badgeSize = 'large';
    var domain = 'https://publons.com';

    var isBadgeMousedOver = false;
    var isPublicationTipMousedOver = false;

    var params = 'size=' + badgeSize + '&badgeID=' + badgeId;
    var url = '/mashlets/tip/' + researcherID + '/?' + params;

    var getResearcherTooltip = function(){

        var request = new XMLHttpRequest();
        request.onload = function() {
            // Setup mouse events to show and hide badge tip.
            if (this.status == 200) {
                document.getElementById(badgeId).innerHTML= request.response;

                var badgeDOMElement = document.getElementById('badgeIcon' + badgeId);

                var tipDomElement = document.getElementById('publisherToolTip' + badgeId);

                badgeDOMElement.addEventListener("mouseover", function mouseOverBadge() {
                    isBadgeMousedOver = true;
                    showTip();
                });

                badgeDOMElement.addEventListener("mouseout", function mouseOffBadge() {
                    isBadgeMousedOver = false;
                    if (!isPublicationTipMousedOver) {
                        setTimeout(hideTip, 300);
                    }
                });

                tipDomElement.addEventListener("mouseover", function mouseOverTip(){
                    isPublicationTipMousedOver= true;
                });

                tipDomElement.addEventListener("mouseout", function mouseOffTip(){
                    isPublicationTipMousedOver = false;

                    if (!isBadgeMousedOver) {
                        setTimeout(hideTip, 300);
                    }
                });

            }
        };
        request.open('GET', domain + url, true);
        request.send();
    };

    function showTip() {
        // Show/hide tip on left or right hand side
        // dependent on where it's place on screen.
        var containerHTML = document.getElementById('publisherToolTip' + badgeId);
        getTipPlacement(containerHTML);
        containerHTML.classList.add('publisherContainerDisplayTip');
        containerHTML.classList.remove('publisherContainerHideTip');
    };


  function getTipPlacement(containerHTML){

        // get the height of the final tip,
        // not the maximum height allowed by the container
        let tipHeight = containerHTML.getElementsByClassName('publisherToolTip')[0].offsetHeight;

        var mouseX = event.clientX;
        var mouseY = event.clientY;

        var screenX = window.innerWidth;
        var screenY = window.innerHeight;

        if (mouseX + 370 > screenX) {
            containerHTML.style.left = (screenX - 370) + 'px';
        } else {
            containerHTML.style.left = (mouseX + 10) + 'px';
        }
        if (mouseY + tipHeight + 10 > screenY) {
            containerHTML.style.top = (screenY - tipHeight - 10) + 'px';
        } else {
            containerHTML.style.top = (mouseY + 10) + 'px';
        }
    };


    function hideTip() {
        if (!isPublicationTipMousedOver && !isBadgeMousedOver) {
            var containerHTML = document.getElementById('publisherToolTip' + badgeId);
            containerHTML.classList.add('publisherContainerHideTip');
            containerHTML.classList.remove('publisherContainerDisplayTip');

        }
    }

    if (document.readyState != 'loading') {
        getResearcherTooltip();
    } else {
        document.addEventListener('DOMContentLoaded', getResearcherTooltip);
    }
})();

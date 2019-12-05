// ==UserScript==
// @name         Twitch Latency on Player Controls
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Takes the Latency to Broadcaster and Bitrate in the video settings menu and places it in the player controls
// @author       You
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function () {

        // we have to open the video stats in order for Twitch to generate them.
        setTimeout(function(){
            document.querySelector(".player-controls__right-control-group").insertAdjacentHTML("afterbegin", "<div id='userScript_latencyDiv'>0000 0:00</div>");

            document.querySelector("button[data-a-target='player-settings-button']").click();

            setTimeout(function(){
                document.querySelector("button[data-a-target='player-settings-menu-item-advanced']").click();

                document.querySelector("input[label='Video Stats']").click();

                // hide video stats window
                document.querySelector("div[data-a-target='player-overlay-video-stats']").style.display = "none";

                setInterval(function(){
                    var userScript_latency = document.querySelector("p[aria-label='Latency To Broadcaster']").innerText;
                    var userScript_bitrate = document.querySelector("p[aria-label='Playback Rate']").innerText;
                    if (document.getElementById("userScript_latencyDiv")) {
                        document.getElementById("userScript_latencyDiv").innerText = userScript_latency;
                    } else {
                        document.querySelector("div[data-a-target='player-overlay-video-stats']").style.display = "none";
                        document.querySelector(".player-controls__right-control-group").insertAdjacentHTML("afterbegin", "<div style='margin-right: 10px; id='userScript_latencyDiv'></div>");
                    }
                    if (document.getElementById("userScript_bitrateDiv")) {
                        document.getElementById("userScript_bitrateDiv").innerText = userScript_bitrate;
                    } else {
                        document.querySelector("div[data-a-target='player-overlay-video-stats']").style.display = "none";
                        document.querySelector(".player-controls__right-control-group").insertAdjacentHTML("afterbegin", "<div style='margin-right: 10px;' id='userScript_bitrateDiv'></div>");
                    }
                }, 3000);

                document.querySelector("button[data-a-target='player-settings-button']").click();
            }, 750);

        }, 750);
    })

})();
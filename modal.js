document.body.innerHTML += '<div id="modalbgcover"><div id="modal"><div id="title"></div><hr id="modalhr"><div id="content1"></div><hr id="modalhr3"><span id="spanmodal"><button id="yes" onclick="yes()">Yes</button><button id="no" onclick="no()">No</button><button id="close" onclick="close3()">&times;</button></span></div></div>';
var modal1 = document.querySelector("#modal");
var title = document.querySelector("#title");
var message = document.querySelector("#content1");
var modalhr = document.querySelector("#modalhr");
var modalhr3 = document.querySelector("#modalhr3");
var spanmodal = document.querySelector("#spanmodal");
var spanmton = document.querySelector("#spanmodal button");
var yes3 = document.querySelector("#yes");
var no3 = document.querySelector("#no");
var close9 = document.querySelector("#close");
var modalcover = document.querySelector("#modalbgcover");
modal1.style.cssText = "margin-top: 10px;padding: 15px;border-radius: 9px;border: 3px solid blue;background-color: aliceblue;display: flex;flex-direction: column;";
title.style.cssText = "font-weight: 600;font-size: 25px;text-align: center;color: green;margin: 9px 0px 10px;";
message.style.cssText = "text-align: center;font-size: 18px;margin: 25px 0px 30px;";
modalhr.style.cssText = "height: 1px;background-color: red;width: 100%;";
modalhr3.style.cssText = "height: 1px;background-color: red;width: 100%;";
spanmodal.style.cssText = "display: flex;justify-content: space-evenly;margin-top: 15px;";
spanmton.style.cssText = "font-size: 20px;";
yes3.style.cssText = "border: 2px solid darkgreen;padding:5px;color: green;background-color: lawngreen;margin-left: auto;margin-right: auto;";
no3.style.cssText = "border: 2px solid darkred;padding:5px;color: rgb(179, 0, 0);background-color: orangered;margin-left: auto;margin-right: auto;";
close9.style.cssText = "border: 2px solid darkred;color: rgb(179, 0, 0);background-color: orangered;padding: 0px 7px 0px 7px;font-size: 27px !important;margin-left: auto;";
modalcover.style.cssText = "position: absolute;top: 0;width: 100vw;height: 100vh;display: none;justify-content: center;align-items: start;background-color: rgba(0, 0, 0, 0.295);";

function change() {
    w = window.innerWidth;
    modal1.style.width = "500px";
    modal1.style.padding = "15px";
    if (w <= 620) {
        modal1.style.width = (w * 90 / 100 - 30) + "px";
    };
    if (w <= 370) {
        modal1.style.padding = "10px";
        modal1.style.width = (w * 95 / 100 - 30) + "px";
    };
};
change();
window.addEventListener("resize", change);
function modal(title1, message1, type) {
    modalcover.style.display = "flex";
    title.innerHTML = title1;
    message.innerHTML = message1;
    if (type == "1") {
        yes3.style.display = "block";
        no3.style.display = "block";
        close9.style.display = "none";
    } else if (type == "2") {
        yes3.style.display = "none";
        no3.style.display = "none";
        close9.style.display = "block";
    };
};
function close3() {
    modalcover.style.display = "none";
};
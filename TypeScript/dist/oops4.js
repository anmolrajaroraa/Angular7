"use strict";
var RedPlayer = /** @class */ (function () {
    function RedPlayer() {
    }
    RedPlayer.prototype.jump = function () {
        console.log("Red player can jump high");
    };
    RedPlayer.prototype.walk = function () {
        console.log("Red plyer can walk fast");
    };
    RedPlayer.prototype.hide = function () {
        console.log("I can hide also");
    };
    return RedPlayer;
}());
var YellowPlayer = /** @class */ (function () {
    function YellowPlayer() {
    }
    YellowPlayer.prototype.jump = function () {
        console.log("Yellow player can jump low");
    };
    YellowPlayer.prototype.walk = function () {
        console.log("Yellow plyer can walk slow");
    };
    return YellowPlayer;
}());
var player = new RedPlayer();
player.walk();
player.jump();
/*var addition:MyType = ()=>{
    return 0;
}*/
var addition = function (a, b) {
    return a + b;
};
/*var addition:MyType = (a:number, b:number, c:number)=>{
    return a + b + c;
}*/
var subtraction = function (a, b) {
    return a - b;
};
//overloading = using the same name function and having diff arguments

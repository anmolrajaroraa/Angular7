"use strict";
var a = "hello"; //implicit way
//a = 100;
var b = 100; //explicit way
var c = "hello";
var d = true;
b++;
console.log("B is " + b);
function add(x, y) {
    return x + y;
}
var result = add(10, 20);
console.log("Result is " + result);
var e = 100;
e = "hello";
e = true;
var f = "hello";
f = 100;
//f = true;
var arr = ["Mike", "John"];
var arr2 = ["john", "mike", "emily", 100];
var obj = { id: 101, name: "John Smith" };
var obj2 = { id: 102, name: "Mike" };
var obj3 = { id: 103, name: "Emily" };
var tuple1 = [101, "John Smith", true];
tuple1[1] = "Mike";
console.log(tuple1);
var MyColor;
(function (MyColor) {
    MyColor[MyColor["RED"] = 100] = "RED";
    MyColor[MyColor["GREEN"] = 200] = "GREEN";
    MyColor[MyColor["BLUE"] = 300] = "BLUE";
})(MyColor || (MyColor = {}));
var colorVar = MyColor.GREEN;
console.log("You selected " + colorVar);
//colorVar = "orange";

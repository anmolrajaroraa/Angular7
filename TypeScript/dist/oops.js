"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var B = /** @class */ (function () {
    function B() {
        console.log("B constructor call");
    }
    return B;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        console.log("A constrcutor starts");
        console.log("A constructor ends");
        return _this;
    }
    A.prototype.print = function () {
        console.log("A is " + this.a + ",  B is " + this.b + ", C is " + this.c);
        console.log("A is " + this.a + ",B is " + this.b + ", C is " + this.c);
    };
    return A;
}(B));
var myObj = new A(10, 20, 30);
console.log("Object is ", myObj);
myObj.print();

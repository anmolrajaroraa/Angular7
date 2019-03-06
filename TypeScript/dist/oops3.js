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
var Loan = /** @class */ (function () {
    function Loan() {
        this.amount = 1000;
    }
    Loan.prototype.emi = function () {
    };
    return Loan;
}());
var HomeLoan = /** @class */ (function (_super) {
    __extends(HomeLoan, _super);
    function HomeLoan() {
        var _this = _super.call(this) || this;
        _this.amount = 2000;
        return _this;
    }
    //overriding the parent function
    HomeLoan.prototype.tenure = function () {
        return 5;
    };
    HomeLoan.prototype.print = function () {
        console.log("Amount of HomeLoan is " + fiveYearLoan.amount);
    };
    HomeLoan.prototype.partialPayment = function () {
    };
    return HomeLoan;
}(Loan));
var fiveYearLoan = new HomeLoan();
fiveYearLoan.print();
fiveYearLoan.emi();
fiveYearLoan.partialPayment();
console.log("Tenure is " + fiveYearLoan.tenure());
//upcasting
var tenYearLoan = new HomeLoan();
console.log(tenYearLoan.tenure());
//console.log("Amount of loan is " + tenYearLoan.amount);
//var myloan:Loan = new Loan();
//console.log("Amount = " + myloan.amount); 

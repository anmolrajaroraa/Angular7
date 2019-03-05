"use strict";
var Student = /** @class */ (function () {
    function Student(id, name, salary) {
        this.id = id;
        this.name = name;
        console.log("Student object created");
        this._salary = salary;
        Student.objectCount++;
        console.log("Object Count is " + Student.objectCount);
    }
    Object.defineProperty(Student.prototype, "salary", {
        get: function () {
            console.log("Getter called");
            return this._salary;
        },
        set: function (salary) {
            this._salary = salary;
            console.log("Setter called");
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.print = function () {
        console.log("Id is " + this.id + ", Name is " + this.name + ", Salary is " + this._salary);
    };
    Student.objectCount = 0;
    return Student;
}());
var john = new Student(101, "John Smith", 9999);
john.print();
john.salary = john.salary + 1000;
console.log("After running setter and getter");
john.print();
var emily = new Student(102, "Emily", 9999);
console.log("John is ", john);
console.log("Emily is ", emily);

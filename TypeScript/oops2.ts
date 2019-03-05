class Student{
    private static objectCount:number = 0;
    private _salary:number;
    constructor(private id:number, private name:string, salary:number){
        console.log("Student object created");
        this._salary = salary;
        Student.objectCount++;
        console.log("Object Count is " + Student.objectCount);
    }

    public set salary(salary:number){
        this._salary = salary;
        console.log("Setter called");
    }

    public get salary(){
        console.log("Getter called");
        return this._salary;
    }
    
    print():void{
        console.log(`Id is ${this.id}, Name is ${this.name}, Salary is ${this._salary}`);
    }
}
var john = new Student(101, "John Smith", 9999);
john.print();
john.salary = john.salary + 1000;
console.log("After running setter and getter");
john.print();
var emily = new Student(102, "Emily", 9999);
console.log("John is ", john);
console.log("Emily is ", emily);
abstract class B{
    constructor(){
        console.log("B constructor call");
    }
}
class A extends B{
    constructor(private a:number, private b:number, private c:number){
        super();
        console.log("A constrcutor starts")        
        console.log("A constructor ends");
    }
    print():void{
        console.log("A is " + this.a +",  B is " + this.b + ", C is " + this.c);
        console.log(`A is ${this.a},B is ${this.b}, C is ${this.c}`);
    } 
}

var myObj:A = new A(10,20,30);
console.log("Object is ", myObj);
myObj.print();
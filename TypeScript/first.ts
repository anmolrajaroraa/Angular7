var a = "hello";  //implicit way
//a = 100;
var b:number = 100; //explicit way
var c:string = "hello";
var d:boolean = true;
b++;
console.log("B is " + b);

function add(x:number,y:number):number{
    return x+y;
}

var result:number = add(10,20);
console.log("Result is " + result);

var e:any = 100;
e = "hello";
e = true;

var f:string|number = "hello";
f = 100;
//f = true;
var arr:string[] = ["Mike", "John"];
var arr2:(string|number)[] = ["john", "mike", "emily", 100];
var obj:{id:number,name:string} = {id:101, name: "John Smith"};
var obj2:{id:number,name:string} = {id:102,name:"Mike"};
var obj3:{id:number, name:string} = {id:103, name:"Emily"};

var tuple1:[number, string, boolean] = [101,"John Smith",true];
tuple1[1] = "Mike";
console.log(tuple1);

enum MyColor{
    RED = 100,
    GREEN = 200,
    BLUE = 300
}

var colorVar:MyColor = MyColor.GREEN;
console.log("You selected " + colorVar);
//colorVar = "orange";

switch(colorVar){
    case MyColor.RED:
    console.log("I am red");
    break;
    
    case MyColor.GREEN:
    console.log("I am green");
}
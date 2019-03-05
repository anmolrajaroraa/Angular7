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

function show():void{
    return;
}

function callShow():void{
    show();
}

function bug():never{
    throw new Error("I am a bug");
}

var balance:number = 0;
if(balance < 0){
    bug();
}



//f = true;
var arr:string[] = ["Mike", "John"];
var arr2:(string|number)[] = ["john", "mike", "emily", 100];

type mytype = {id:number, name:string}

var obj:mytype = {id:101, name: "John Smith"};
var obj2:mytype = {id:102,name:"Mike"};
//var obj3:mytype = {id:103};



var num:number = 1000;
num = 0;
var str:string = "hello";
str = "";


console.log(obj);

var tuple1:[number, string, boolean] = [101,"John Smith",true];
tuple1[1] = "Mike";
console.log(tuple1);

enum MyColor{
    RED = 101,
    GREEN = 200,
    BLUE = 300
}

var colorVar:MyColor;
if(MyColor.RED == 100){
    colorVar = MyColor.RED;
}
else{
    colorVar = MyColor.GREEN;
}
console.log("You selected " + colorVar);
//colorVar = "orange";

switch(colorVar){
    case MyColor.RED:
    console.log("I am red");
    break;
    
    case MyColor.GREEN:
    console.log("I am green");
}
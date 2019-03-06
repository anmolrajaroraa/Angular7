interface Player{
    jump():void;
    walk():void;
}
interface StarPlayer{
    hide():void;
}
interface HybridPlayer extends Player, StarPlayer{

}

class RedPlayer implements HybridPlayer{
    jump():void{
        console.log("Red player can jump high");
    }
    walk():void{
        console.log("Red plyer can walk fast");
    }
    hide():void{
        console.log("I can hide also");
    }
}

class YellowPlayer implements Player{
    jump():void{
        console.log("Yellow player can jump low");
    }
    walk():void{
        console.log("Yellow plyer can walk slow");
    }
}

var player:RedPlayer = new RedPlayer();
player.walk();
player.jump();

interface MyType{
    (x:number, y:number):number;
}

/*var addition:MyType = ()=>{
    return 0;
}*/
var addition:MyType = (a:number,b:number)=>{
    return a + b;
}
/*var addition:MyType = (a:number, b:number, c:number)=>{
    return a + b + c;
}*/
var subtraction:MyType = (a:number, b:number)=>{
    return a - b;
}

//overloading = using the same name function and having diff arguments
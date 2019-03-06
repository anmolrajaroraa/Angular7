abstract class Loan{
    protected amount:number;
    constructor(){
        this.amount = 1000;
    }
    abstract tenure():void;
    emi():void{

    }
}
class HomeLoan extends Loan{
    constructor(){
        super();
        this.amount = 2000;
    } 

    //overriding the parent function
    tenure():number{   
        return 5;
    }
    print():void{
        console.log("Amount of HomeLoan is " + fiveYearLoan.amount);
    }
    partialPayment():void{

    }
}

var fiveYearLoan:HomeLoan = new HomeLoan();
fiveYearLoan.print();
fiveYearLoan.emi();
fiveYearLoan.partialPayment();
console.log("Tenure is " + fiveYearLoan.tenure());
//upcasting
var tenYearLoan:Loan = new HomeLoan();
console.log(tenYearLoan.tenure());
//console.log("Amount of loan is " + tenYearLoan.amount);
//var myloan:Loan = new Loan();
//console.log("Amount = " + myloan.amount); 
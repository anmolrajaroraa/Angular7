import { Injectable } from '@angular/core';

@Injectable()
export class MyService{
    private msg:string;
    constructor(){
        this.msg = '';
    }
    setMessage(msg:string){
        this.msg = msg;
    }
    getMessage():string{
        return this.msg;
    }
}
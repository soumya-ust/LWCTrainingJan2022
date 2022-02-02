import { LightningElement } from 'lwc';

export default class CalcDemo extends LightningElement {
    result='';
    exp='';
    clrExp=false;
    prevOper = '';
    operations = {
        current: 0,
        '=': function(){
            return this.current;
        },
        '+': function(n){
            this.current += parseInt(n);
            return this;
        },
        '-': function(n){
            this.current -= parseInt(n);
            return this;
        },
        '*': function(n){
            this.current *= parseInt(n);
            return this;
        },
        '/': function(n){
            this.current /= parseInt(n);
            return this;
        }
    }
    get result(){
        return this.operations.current;
    }
    
    doOperation(event){
       if(this.clrExp){
        this.exp= '';
        this.result= '';
        this.operations.current= 0;
        this.clrExp= false;
       }
       this.exp= this.exp+ event.target.label;
       if (event.target.label === "CLR"){
        this.exp= '';
        this.result= '';
        this.operations.current= 0;
       }
       else if (event.target.label === "+"){
        if (this.operations.current === 0){
            this.operations.current = parseInt(this.result);
        }
        else{
            this.Result = this.operations[this.prevOper](this.result);
        }
        this.prevOper = '+';
        this.result = '';
       }
       else if (event.target.label === "-"){
        if (this.operations.current === 0){
            this.operations.current = parseInt(this.result);
        }
        else{
            this.result = this.operations[this.prevOper](this.result);
        }
        this.prevOper = '-';
        this.result = '';
       }
       else if (event.target.label === "*"){
        if (this.operations.current === 0){
            this.operations.current = parseInt(this.result);
        }
        else{
            this.result = this.operations[this.prevOper](this.result);
        }
        this.prevOper = '*';
        this.result = '';
       }
       else if (event.target.label === "/"){
        if (this.operations.current === 0){
            this.operations.current = parseInt(this.result);
        }
        else{
            this.result = this.operations[this.prevOper](this.result);
        }
        this.prevOper = '/';
        this.result = '';
       }
       else if (event.target.label === "="){
        this.result = this.operations[this.prevOper](this.result);
        this.result = this.operations['=']();
            this.clrExp = true;
       }
       else{
        this.result = this.result + event.target.label;
       }
    }
}
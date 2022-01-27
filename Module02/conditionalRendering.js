import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    checked=false;
     addr1;
     addr2;
     land;
     zip;  
     peradd1(event){
         this.addr1=event.target.value;
     }
     peradd2(event){
        this.addr2=event.target.value;
    }
    perland(event){
        this.land=event.target.value;
    }
    perzip(event){
        this.zip=event.target.value;
    }
        handleaddr(){
        this.checked=true;
    }
}
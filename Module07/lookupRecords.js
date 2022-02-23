import { LightningElement,wire } from 'lwc';
import getaccounts from '@salesforce/apex/getaccounts.allAccounts';
import getsearchaccounts from '@salesforce/apex/getaccounts.searchAccounts';
import getcontacts from '@salesforce/apex/getaccounts.allContacts';
import getcontacts1 from '@salesforce/apex/getaccounts.allContacts1';

export default class LookupRecords extends LightningElement {

    searchkey='';
    selectedoption='';
    contactsel='';
    selected=false;
    clicked=false;
    option=false;
    @wire(getsearchaccounts,{acname:"$searchkey"})
    aclist;
    @wire(getcontacts,{accountId:"$contactsel"})
    conlist;
    @wire(getcontacts1)
    conlist1;
    
    handleaccounts(event){
        this.searchkey = event.target.value;
        this.clicked = true;
        this.option = false;
        
       
    }
    handleContacts(event){
         let selectedoption=event.currentTarget.getAttribute("data-key");
         this.contactsel=selectedoption;
        console.log(selectedoption);
        this.option = true;
        this.clicked = false;
        this.selected=true;
    }
    resetSearch(){
       this.selected=false; 
       this.option = false;
    }
   
}
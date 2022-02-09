import { LightningElement } from 'lwc';
import name_field from '@salesforce/schema/Account.Name';
import cname_field from '@salesforce/schema/Contact.Name';
import acname_field from '@salesforce/schema/Contact.AccountId';
import oppname_field from '@salesforce/schema/Opportunity.Name';
import stage_field from '@salesforce/schema/Opportunity.StageName';
import closedate_field from '@salesforce/schema/Opportunity.CloseDate';
import oppacname_field from '@salesforce/schema/Opportunity.AccountId';


export default class QuickCreate extends LightningElement {
    message;
    showAllAcc=false;
    showAllAcc1=false;
    showAllAcc2=false;
    fields = [name_field];
    fields1 = [cname_field,acname_field];
    fields2 = [oppname_field,stage_field,closedate_field,oppacname_field];
    handleFields1(){
        this.showAllAcc=true;
    }
    handleFields2(){
        this.showAllAcc1=true;
    }
    handleFields3(){
        this.showAllAcc2=true;
    }
    handleSuccess(){
       // this.message="Record Saved"
       alert("Record Saved");
       eval("$A.get('e.force:refreshView').fire();");
      
    }
    handleReset(){
        const inpfields=this.template.querySelectorAll('lightning-input-field');
        if(inpfields){
            inpfields.forEach(field => {
                field.reset();
            });
        }
    }
}
import { LightningElement,wire,api} from 'lwc';
import oppdata from '@salesforce/apex/getOpp.fetchOpportunitybyName';
import oppdata1 from '@salesforce/apex/getOpp.fetchOpportunity';
export default class ShowOppDetails extends LightningElement {
    selected=false;
    @api recordId;
    @wire(oppdata1,{accountId:"$recordId"})
   oplist1;
   
    @wire(oppdata,{opname:"$searchkey"})
    oplist;
    searchkey='';
    handleSearch(event) {
        this.value = event.detail.value;
        this.searchkey = event.target.value;
        this.selected=true;
    }

    get eventOptions() {
        var returnOptions = [];
        if(this.oplist1.data){
            this.oplist1.data.forEach(ele =>{
                returnOptions.push({label:ele.Name , value:ele.Name});
            }); 
        }
        console.log(JSON.stringify(returnOptions));
        return returnOptions;
        
    }
}
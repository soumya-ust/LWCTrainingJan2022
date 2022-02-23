public with sharing class getOpp {
    public getOpp() {

    }
    @auraEnabled(Cacheable=true)
    public static List<Opportunity> fetchOpportunitybyName(String opname)
    {
        string key=opname+'%';
        List<Opportunity> oplist=[SELECT Id,Name,AccountId,CloseDate,Amount,StageName FROM Opportunity WHERE Name like :key];
        return oplist;
    }  
    @auraEnabled(Cacheable=true)
    public static List<Opportunity> fetchOpportunity(String accountId)
    { 
        List<Opportunity> oplist1=[SELECT Id,Name,AccountId,CloseDate,Amount,StageName FROM Opportunity where AccountId=:accountId LIMIT 10000];
        return oplist1;
    }  
}
public with sharing class getaccounts {
    public getaccounts() {

    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> allAccounts(){
       return [Select Id,Name from Account];
    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> searchAccounts(String acname){
        String key=acname+'%';
        List<Account> aclist=[SELECT Id,Name FROM Account WHERE name like :key];
        return aclist;
    }
    @AuraEnabled(Cacheable=true)
    public static List<Contact> allContacts(String acname,String accountId){
        List<Contact> conlist=[Select Id,Name,Title,Email,Phone from Contact where AccountId =:accountId];
        return conlist;
    }
    @AuraEnabled(Cacheable=true)
    public static List<Contact> allContacts1(){
        List<Contact> conlist1=[Select Id,Name,Title,Email,Phone from Contact];
        return conlist1;
    }
}

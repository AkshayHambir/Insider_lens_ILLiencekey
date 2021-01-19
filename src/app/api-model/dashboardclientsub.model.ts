export class ClientSubList {
    smActiveDpcount: number;
    smCmIdPkFk: number;
    smCreatedBy: number;
    smCreatedOn: string;
    smFromDate: string;
    smSubscriptionPlan: string;
    smToDate: string;

    constructor (smCmIdPkFk,smActiveDpcount,smFromDate,smSubscriptionPlan,smCreatedBy,smCreatedOn,smToDate) {
        this.smCmIdPkFk = smCmIdPkFk;
        this.smActiveDpcount = smActiveDpcount;
        this.smCreatedOn = smCreatedOn;
        this.smCreatedBy = smCreatedBy;
        this.smSubscriptionPlan =smSubscriptionPlan;
        this.smFromDate = smFromDate;
        this.smToDate = smToDate;
    }
}
   
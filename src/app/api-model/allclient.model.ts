export class ClientList {
    // cmIdPk: string;
    cmCin: string;
    cmName: string;
    cmAddress: string;
    cmCocontactNo:string;
    cmCoemailId: string;
    cmItcontactNo: string;
    cmItemailId: string;
    cmCreatedBy: string;
    cmCreatedOn: string;

    constructor (cmIdPk,cmCin,cmName,cmAddress,cmCocontactNo,cmCoemailId,cmItcontactNo,cmItemailId,cmCreatedBy,cmCreatedOn) {
        // this.cmIdPk = cmIdPk;
        this.cmCin = cmCin;
        this.cmName = cmName;
        this.cmAddress = cmAddress;
        this.cmCocontactNo = cmCocontactNo;
        this.cmCoemailId = cmCoemailId;
        this.cmItcontactNo = cmItcontactNo;
        this.cmItemailId = cmItemailId;
        this.cmCreatedOn = cmCreatedOn;
        this.cmCreatedBy = cmCreatedBy;
    }
}
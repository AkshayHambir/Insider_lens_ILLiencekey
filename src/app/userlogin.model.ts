export class Userlogin {
    public username : string;
    public firstName : string;
    public id : number;
    public lastName : string;
    public token : string;


constructor(p_id:number , p_firstName:string, p_lastName:string, p_username:string, p_token:string)
    {

        this.username = p_username;
        this.firstName = p_firstName;
        this.id = p_id;
        this.lastName = p_lastName;
        this.token = p_token;

    }
  
  }
  
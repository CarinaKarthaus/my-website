export class Contact {
    name: string;
    email: string;
    message: string;
  
    constructor(obj?: any) {
      this.name = obj ? obj.name : '';
      this.email = obj ? obj.email : '';
      this.message = obj ? obj.message : '';
    }
  
  }
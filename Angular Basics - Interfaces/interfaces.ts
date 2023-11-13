interface User {
    name: string;
    id: number;
  }
  
  class UserAccount {
    name!: string;
    id!: number;
    email!: string;
    constructor(name:string, id:number, email:string){
        this.name = name;
        this.id = id;
        this.email = email;
    }
  }
  
  const user: User = new UserAccount("Ali", 4, "Example");
//   user.name = "Ali";
//   user.id = 4;
//   user.email = "example";
  
  console.log(user)
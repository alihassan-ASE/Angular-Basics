

// Using # or private for a private variable and protected for protected variable 
// private variable only accessible in class
// protected variable accessible in class and subclasses

// if using static method in class it is not accessible through instance but with class name
class Employee {
    #id: number;
    protected name: string;
    address: string;
    constructor(id: number,  name: string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    static getANumber(): number {
        return 50;
    }
    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`;
    }
}


class Manager extends Employee {
    constructor( id: number, name: string, address: string){
        super(id, name, address);
    }

    getNamWithAddress() : string {
        return `${this.name} stays at ${this.address}`; 
    }
}


let ali = new Employee(1, 'Ali', 'Wahdat Road');
const manager = new Manager(2, 'Mughal', 'Johar Twon');
console.log(ali.getNameWithAddress());
console.log(manager.getNamWithAddress());
console.log(Employee.getANumber());
"use strict";
// Using # or private for a private variable and protected for protected variable 
// private variable only accessible in class
// protected variable accessible in class and subclasses
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
// if using static method in class it is not accessible through instance but with class name
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    static getANumber() {
        return 50;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNamWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let ali = new Employee(1, 'Ali', 'Wahdat Road');
const manager = new Manager(2, 'Mughal', 'Johar Twon');
console.log(ali.getNameWithAddress());
console.log(manager.getNamWithAddress());
console.log(Employee.getANumber());

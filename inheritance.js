class Parent {
    constructor() {
        this.Fathername = "Solimullah";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;

    }
}
const baby = new Child("Fahim");
const baby2 = new Child("Giasuddin");
console.log(baby, baby2);
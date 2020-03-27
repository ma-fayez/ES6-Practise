// Constructor Practice with similar classes

class student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.Institute = "Chattogram Polytechnic Institute";
    }

}
const student1 = new student(1, "Fayez");
const student2 = new student(2, "Sakib");
const student3 = new student(3, "Abraul Haque");

console.log(student1, student2, student3);
// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
    this.name = attrs.name,
    this.age = attrs.age,
    this.location = attrs.location
    }
    speak(){
        return `Hello my name is. Hello my name is. Hello my name is....${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (attrsInstr){
    super(attrsInstr)
    this.specialty = attrsInstr.specialty,
    this.favLanguage = attrsInstr.favLanguage,
    this.catchPhrase = attrsInstr.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student,subject){
        return `${student} receives a imperfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(attrsStd){
    super(attrsStd)
    this.previousBackground = attrsStd.previousBackground,
    this.className = attrsStd.className,
    this.favSubjects = attrsStd.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has commenced the Sprint Challenge on ${subject}!`
    }
}

class ProjectManager extends Instructor{
    constructor(attrsPM){
    super(attrsPM)
    this.gradClassName = attrsPM.gradClassName,
    this.favInstructor = attrsPM.favInstructor
    }
    standup(channel){
        return `${this.name} announces to ${channel}, @channel stand-up is NOW!!`
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`
    }
}

const karl = new Person({
    name:"Karl",
    location:"Chicago",
    age: 40,
})

const fred = new Instructor({
    name: "Fred",
    location: "Maui",
    age: 35,
    specialty: "CSS",
    favLanguage: "HTMl, CSS, JS",
    catchPhrase: "MAHALO!"
});

const ewen = new Student({
    name: "Ewen",
    location: "Scotland",
    age: 28,
    previousBackground: "Brick layer",
    className: "WEB23",
    favSubjects: ["HMTL, CSS, JS6"],
});

const teddy = new ProjectManager({
    name: 'Ted',
    location: 'Maine',
    age: 33,
    favLanguage: 'JS6',
    specialty: 'JS6',
    catchPhrase: "JS is the only aspect of programming that is rewarding. Put it on my gravestone.",
    gradClassName: "WEB1",
    favInstructor:"Fred"
});

// -- PERSON method
console.log(karl.speak())

// -- INSTRUCTOR method
console.log(fred.demo("HTML"));
console.log(fred.grade("Ewen","CSS"));

// -- STUDENT method
console.log(ewen.PRAssignment("CSS"));
console.log(ewen.sprintChallenge("JS6"));

// -- PM method
console.log(teddy.standup("WEB23"));
console.log(teddy.debugsCode("Eric's", "JS6"));


console.log(`${ewen.name} says ${ewen.previousBackground}`);

console.log(`${teddy.name} hails from ${teddy.location}. He is an expert in ${teddy.specialty}.`);


console.log(`new Person name: ${karl.name}`);
console.log(`new Instructor name: ${fred.name}`);
console.log(`new Student name: ${ewen.name}`);
console.log(`new ProjectManager name: ${teddy.name}`);


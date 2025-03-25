let person = {
    name: {
        first: "Shaun",
        last: "Wassel"
    } ,

    age: 123,
    haircolor: "Brown",
    professon: "Software Developer",
    likesHamburgers: true,
    dinksCoffe: true,
};

person.name.first = "John";
console.log(person.name.first + " " + person.name.last);

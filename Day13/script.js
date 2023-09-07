const Student = {

    name: "haritha",
    age: 22,
    location: "kadapa",

    sayHi: function(a,b) {
        console.log("hello" +(a+b));
        return a+b;
    },

    marks: {

        telugu: 45,
        maths: 56,
        english: 66,

        printMarks: function() {
            console.log(Student.name);
            console.log(this.maths);
        },

        distances: {

            kadapa: 200,
            rajampet: 40,

            printDistance: function() {

                console.log(this.kadapa);
                console.log(Student.marks.english);
                console.log(Student.age);
            },
        },
    },
};
console.log(Student.age);
console.log(Student["age"]);
Student.sayHi(6,8);
Student.marks.printMarks();
Student.marks.distances.printDistance();
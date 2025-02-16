
console.warn("======= Part 4 =======");

// Task 1
const classRoom = {
  name: "Team 32",
  students: [
    {
      fullName: "Jane Jordan",
      age: 25,
      aspiration: "Software Developer",
      github: "batwoman"
    },
    {
      fullName: "Alice Johnson",
      age: 17,
      aspiration: "Data Scientist",
      github: "alice_j"
    },
    {
      fullName: "Bob Brown",
      age: 32,
      aspiration: "Web Developer",
      github: "bb_dev"
    }
  ],
}


// Task 2
// to keep a clear separation between tasks, I define the function outside of the object
// defining the function inside the object is also correct
classRoom.hasStudent = function (fullName) {
  for (const student of this.students) {
    if (student.fullName === fullName) {
      // this will return true as soon as the student is found
      return true;
    }
  }
  // if the student is not found, return false
  return false;
}
const hasAlice = classRoom.hasStudent("Alice Johnson");
console.log("Has Alice:", hasAlice);
let hasBertha = classRoom.hasStudent("Bertha Smith");
console.log("Has Bertha:", hasBertha);


// Task 3
classRoom.addStudent = function (fullName, age, aspiration, github) {
  if (!this.hasStudent(fullName)) {
    this.students.push({ fullName, age, aspiration, github });
  }
}
classRoom.addStudent("Bertha Smith", 30, "UX Designer", "bertha_designs");
hasBertha = classRoom.hasStudent("Bertha Smith");
console.log("Has Bertha:", hasBertha);


// Task 4
classRoom.expelStudent = function (fullName) {
  // we need to create a new array to store the students that are not expelled
  const newStudents = [];
  for (const student of this.students) {
    if (student.fullName !== fullName) {
      newStudents.push(student);
    }
  }
  // we replace the old array with the new array
  this.students = newStudents;
}
classRoom.expelStudent("Bertha Smith");
hasBertha = classRoom.hasStudent("Bertha Smith");
console.log("Has Bertha:", hasBertha);


// task 5
classRoom.numberOfMinors = function () {
  let count = 0;
  for (const student of this.students) {
    if (student.age < 18) {
      count++;
    }
  }
  return count;
}
console.log("Number of minors:", classRoom.numberOfMinors());


// task 6
classRoom.addStudent("Michael Smith", 52, "UX Designer", "mich22");
classRoom.addStudent("Michael Smith", 16, "Astronaut", "buzz_lightyear");
classRoom.setUniqueStudentIds = function () {
  for (const student of this.students) {
    student.id = Math.floor(Math.random() * 1000000); // random number between 0 and 999999
  }
}
classRoom.setUniqueStudentIds();
console.log("After setting IDs:", classRoom.students);
// Student Data Management

let students = [
  {name: "Alice", grade: 85, subject: "Math"},
  {name: "Bob", grade: 92, subject: "Science"},
  {name: "Charlie", grade: 78, subject: "Math"},
  {name: "Diana", grade: 95, subject: "Science"}
];

// Find all Math students
let mathStudents = students.filter(s => s.subject === "Math");

// Calculate average grade
let avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;

// Find top student
let topStudent = students.reduce((max, s) => s.grade > max.grade ? s : max);

console.log("Math students:", mathStudents);
console.log("Average grade:", avgGrade);
console.log("Top student:", topStudent.name);

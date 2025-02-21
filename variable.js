const studentId = 2030660;
let studentEmail = '2030660@iub.edu.bd';
var password = 12345;
city = "Dhaka";
voter = true;

// studentId = 2030661;
console.log(studentId);
console.log(typeof(studentId));

console.table({
  studentId: typeof(studentId),
  studentEmail: typeof(studentEmail),
  password: typeof(password),
  city: typeof(city)
});

console.table([typeof(studentId), typeof(studentEmail), typeof(password), typeof(city), typeof(voter)]);
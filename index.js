class Student {
//constructor : تخزين بيانات الطالب 
  constructor(id, name, grades, attendance){
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }
  // حساب متوسط الدرجات
  calculateAverage(){
    let total = this.grades.reduce((sum, grade)=> sum + grade, 0 
    );
    return  total / this.grades.length;
  }
 //تحديد تقدير الطالب
  getGrade(){
    let average = this.calculateAverage();
    if (average >= 90 ){
      return "A";
    } else if (average >= 80){
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else {
      return "F";
    }
      
   }
 
 //Final result تحديد نتيجه الطلاب 
 getFinalResult() {
  let average = this.calculateAverage();
  if (average >= 50 && this.attendance >= 75) {
    return "ناجح";
  } else {
    return "يحتاج مراجعة" ;
  }
}
}
// إنشاء قائمة الطلاب و بياناتهم
let studentsList = [
  new Student(1, "Ahmed", [80, 90 , 70], 85), 
  new Student(2, "Mona", [95, 90, 100], 95),
  new Student(3, "Sara", [50, 60, 70], 70),
  new Student(4, "Omar", [40, 45, 50], 60),
];
//Filter استخراج الطلاب المتعثرين 
let strugglingStudents = studentsList.filter(student => {let average = student.calculateAverage();
  return average >= 40 && average <=49;
});
console.log("Struggling Students:");
console.log(strugglingStudents.map(student => student.name)
);
//لجنه الرأفه 
 console.log("Mercy Studens:", strugglingStudents);
// map اضافه 5 درجات لكل ماده
let mercyResults = strugglingStudents.map(student => { return {
  name: student.name, oldAverage:
  student.calculateAverage(), newAverage: 
  student.calculateAverage() +5
};
});
console.log("Mercy Results:", mercyResults);
// reduce حساب المتوسط العام لجميع الطلاب
let totalMercyAverages = mercyResults.reduce((sum, student) => {
  return sum + student.newAverage; 
}, 0);
console.log("Total Mercy Averages:", totalMercyAverages);
//متوسط درجاتالطلاب بعد اضافه ال 5 درجات
let mercyAverage = mercyResults.length > 0 
 ? totalMercyAverages / mercyResults.length :0 ;
 console.log("Average After Mercy:", mercyAverage);
// استخراج الطلاب الحاصلين علي 90 او اكثر
let excellentStudents = studentsList.filter(student => student.calculateAverage() >= 90
);
console.log("Excellent Students:");
console.log(excellentStudents.map(student => student.name));
console.log("Mercy Results:", mercyResults);
console.log("Number of students:", studentsList.length);
console.log("Frist student:",studentsList[0].name);
console.log("Student Name:", studentsList[0].name);
console.log("Average:",studentsList[0].calculateAverage());
console.log("Grade:",studentsList[0].getGrade());
console.log("All Students:", studentsList);
// طباعة التقرير النهائي للطلاب 
console.log("===== STUDENTS REPORT =====");
studentsList.forEach(student => {
  console.log("-----------");
  console.log("ID:", student.id);
  console.log("Name:", student.name);
  console.log("Grades:", student.grades);
  console.log("Average:", student.calculateAverage());
  console.log("Grade:", student.getGrade());
  console.log("Attendance:", student.attendance + "%");
  console.log("Final Result:", student.getFinalResult());
});
let topStudents = studentsList.filter(student => {
  return
  student.calculateAverage() >= 90;
});
console.log("Excellent Students:"); 
console.log(excellentStudents.map(student => student.name));
let weakStudents = studentsList.filter(student => {
  let average = student.calculateAverage();
  return average >= 40 &&  average <= 49;
});
console.log("Struggling Students:");
console.log(weakStudents.map(student => student.name));
let allStudentsTotal = studentsList.reduce((sum, student) => {
  return sum + student.calculateAverage();
}, 0);
let classAverage = allStudentsTotal / studentsList.length;
console.log("Overall Average:", classAverage);

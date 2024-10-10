export default function updateStudentGradeByCity(students, city, newGrades){
	const filteredStudents = students.filter((student) => student.location === city);

	const gradedStudents = filteredStudents.map((student) => {
	for (let gradeInfo of newGrades){
	if (student.id == gradeInfo.studentId){
	student.grade = gradeInfo.grade;}
	}
	if (student.grade == undefined){
	student.grade = "N/A";
	}
	return student;
	});
	return gradedStudents;
}

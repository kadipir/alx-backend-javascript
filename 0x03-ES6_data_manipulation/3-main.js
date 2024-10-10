import  getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const sum = getStudentIdsSum(students);
console.log(sum);

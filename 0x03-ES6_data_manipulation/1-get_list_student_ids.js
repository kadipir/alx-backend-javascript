export default function getListStudentIds(arr){
	let Arr = [];
	if (arr instanceof Array){
		Arr = arr.map((item) => item.id)
	}
	return Arr;}

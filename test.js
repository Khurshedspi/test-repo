let exams = ['bangla', 'math', 'english', 'biology'];


function getSubject(names){
    for(let name of names){
        console.log(name);
    }
    return names;
}
const subjectName = getSubject(exams)
console.log(subjectName);
//complete this code
class Person {
	name;
	age;
	constructor(name,age){
		this.name = ''
		this.age = ''
	}
	get getName(){
		return this.name
	}
	set setAge(age){
		this.age =  age
	}
}

class Student extends Person {
	 study(){
		console.log(name)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${name}is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

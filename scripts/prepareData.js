var studentsMap = {};
var edgeMap = {};

for (var i = 0; i<students.length; i++){
	studentsMap[students[i].id] = students[i];
};

for (var i = 0; i < students.length; i++) {
	edgeMap[students[i].id] = [];
};

var notDefined = [];

for (var i = 0; i < relations.length; i++) {
	if (!studentsMap[relations[i].person1]) {
		notDefined.push(relations[i].person1);
	};
	if (!studentsMap[relations[i].person2]) {
		notDefined.push(relations[i].person2);
	};
}
if (!notDefined) {
	console.log("Not defined ids: "+notDefined);
}

function addPerson(person1, person2) {
	if (edgeMap[person1].indexOf(person2) == -1){
		edgeMap[person1].push(person2);
	};
};

for (var i = 0; i < relations.length; i++) {
	var person1 = relations[i].person1,
		person2 = relations[i].person2;

	addPerson(person1, person2);
	addPerson(person2, person1);
};

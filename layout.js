var chooser = $('#class-chooser');
var graph = $('#graph');

var password = null;
do {
    password = prompt("Zadajte heslo!");
} while (password != "ceckosi");

var classSelector = $('<ul>',{
	class: "list-group checked-list-box",
	id: "class-list"
});
for (var i=0; i< classes.length ; i++) {
    classSelector.append($('<li>', {
    	class: "list-group-item", 
    	id: classes[i].id, 
    	text: classes[i].name
    }));
}
var well = $('<div>', {class: "well"});
well.append(classSelector);
chooser.append(well);
makeList(classSelector, "class");

function getActiveListElements(listName){
	var checkedItems = [];
    $(listName + " li.active").each(function(idx, li) {
        checkedItems.push($(li).attr('id'));
    });
    return checkedItems;
}

function getStudentsInClasses(classes){
	var selectedStudents = [];
	for (var i = 0; i<students.length; i++){
		if (classes.indexOf(students[i].class) > -1) {
			selectedStudents.push(students[i]);
		}
	}
    return selectedStudents;
}

function getStudents(ids){
	var selectedStudents = [];
	for (var i = 0; i<ids.length; i++){
		selectedStudents.push(studentsMap[ids[i]]);
	}
    return selectedStudents;
}

$('#show-classes').on('click', function() { 
	var classes = getActiveListElements("#class-list");
    paintGraph(getStudentsInClasses(classes));
});

$('#show-students').on('click', function() {
	var selectedStudents = getActiveListElements("#student-list");
    paintGraph(getStudents(selectedStudents));
});
var allClassesSelected = false;
$('#select-all-classes').on('click', function() {
    $('.class').each(function(){
    	$(this).prop('checked', !allClassesSelected);
    	$(this).triggerHandler('change');
    });
    allClassesSelected = !allClassesSelected;
});

$('#select-classes').on('click', function() {
	$("#student-chooser").empty();
	var classes = getActiveListElements("#class-list");
	var studentSelector = $('<ul>',{
		class: "list-group checked-list-box",
		id: "student-list"
	});
    for(var i = 0; i < students.length; i++) {
		if (classes.indexOf(students[i].class) > -1) {
			studentSelector.append($('<li>', {
		    	class: "list-group-item", 
		    	id: students[i].id, 
		    	text: students[i].name + ' (' +students[i].class+ ')'
		    }));
		}
	};
	var well = $('<div>', {class: "well"});
	well.append(studentSelector);
	$("#student-chooser").append(well);
	makeList(studentSelector, "student");
});

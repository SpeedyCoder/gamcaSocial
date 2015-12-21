var classes = [
	{
		"name": "Oktava 2018",
		"id": "2018a"  
	},
	{
		"name": "4B 2018",
		"id": "2018b"  
	},
	{
		"name": "4C 2018",
		"id": "2018c"
	},
	{
		"name": "4D 2018",
		"id": "2018d"  
	},
	{
		"name": "4B 2017",
		"id": "2017b"  
	},
	{
		"name": "4C 2017",
		"id": "2017c"  
	},
	{
		"name": "4D 2017",
		"id": "2017d"  
	},
	{
		"name": "Oktava 2016",
		"id": "2016a"  
	},
	{
		"name": "4B 2016",
		"id": "2016b"  
	},
	{
		"name": "4C 2016",
		"id": "2016c"  
	},
	{
		"name": "4D 2016",
		"id": "2016d"  
	},
	{
		"name": "Oktava 2015",
		"id": "2015a"  
	},
	{
		"name": "4B 2015",
		"id": "2015b"  
	},
	{
		"name": "4C 2015",
		"id": "2015c"  
	},
	{
		"name": "Oktava 2014",
		"id": "2014a"  
	},
	{
		"name": "4B 2014",
		"id": "2014b"  
	},
	{
		"name": "4C 2014",
		"id": "2014c"  
	},
	{
		"name": "Oktava 2013",
		"id": "2013a"  
	},
	{
		"name": "4B 2013",
		"id": "2013b"  
	},
	{
		"name": "4C 2013",
		"id": "2013c"  
	},
	{
		"name": "Oktava 2012",
		"id": "2012a"  
	},
	{
		"name": "4B 2012",
		"id": "2012b"  
	},
	{
		"name": "4C 2012",
		"id": "2012c"  
	},
];

var students = [
	{
		"name": "Dan",
		"id": "dan",
		"class": "2013a"
	},
	{
		"name": "Pepo",
		"id": "pepo",
		"class": "2013a"
	},
	{
		"name": "Tatika",
		"id": "tatika",
		"class": "2013a"
	},
	{
		"name": "Bini",
		"id": "bini",
		"class": "2016d"
	},
	{
		"name": "Zuza",
		"id": "zuza",
		"class": "2013b"
	},
	{
		"name": "Andy",
		"id": "andy",
		"class": "2013a"
	}
];

var studentsMap = {};

for (var i = 0; i<students.length; i++){
	studentsMap[students[i].id] = students[i];
}

var relations = [
	{
		"person1": "dan",
		"person2": "bini"
	},
	{
		"person1": "dan",
		"person2": "zuza"
	},
	{
		"person1": "andy",
		"person2": "zuza"
	},
	{
		"person1": "pepo",
		"person2": "tatika"
	}
];

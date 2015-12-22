import json
import csv

relations = []

with open('relations.csv', 'rb') as csvfile:
	reader = csv.reader(csvfile, delimiter='\t')
	reader.next()
	for row in reader:
		relation = {
			"person1": row[0],
			"person2": row[1]
		}
		relations.append(relation);

with open('relations.json', 'wb') as jsonfile:
	json.dump(relations, jsonfile, indent=3, sort_keys=True)

studentList = [];
studentMap = {}

with open('students.csv', 'rb') as csvfile:
	reader = csv.reader(csvfile, delimiter='\t')
	reader.next()
	for row in reader:
		student = {
			"name": row[0],
			"id": row[1],
			"class": row[2],
			"sex": row[3]
		}
		studentList.append(student);
		studentMap[row[1]] = student;

with open('students.json', 'wb') as jsonfile:
	json.dump(studentList, jsonfile, indent=3, sort_keys=True)

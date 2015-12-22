function addAllRelations(ids){

	var result = ids.slice();

	for (var i = 0; i < ids.length; i++){
		var id = ids[i];
		for (var j = 0; j < edgeMap[id].length; j++){
			if (result.indexOf(edgeMap[id][j]) == -1){
				result.push(edgeMap[id][j]);
			};
		};
	};

	return result;
};

// Performs DFS to find all accesible nodes from the start set.
function addAllAccesible(ids){

	var toCompute = ids.slice(),
		visited = [];

	while (toCompute.length != 0) {
		var person = toCompute.pop();
		if (visited.indexOf(person) == -1){
			visited.push(person);
		};

		for (var i = 0; i < edgeMap[person].length; i++) {
			if (visited.indexOf(edgeMap[person][i]) == -1) {
				toCompute.push(edgeMap[person][i]);
			};
		};
	};

	console.log(visited);

	return visited;
}
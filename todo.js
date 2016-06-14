var todos = ["sing a song"];

	//ask for input
var input = prompt("what would you like to do?");


while(input !== "quit"){
	
	//handle input
	if (input === "list"){
		//list array
		console.log(todos);
	}else if (input === "new"){
		//add todos to array
		var newToDo = prompt("Great! Let's add a new todo");
		todos.push(newToDo);
		console.log(todos);
	}

	//ask again for new input
	var input = prompt("what would you like to do?");
}
console.log("you've quit the app");
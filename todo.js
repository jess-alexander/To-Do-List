var todos = ["sing","dance","cook","clean","read"];

	//ask for input
var input = prompt("what would you like to do?");


while(input !== "quit"){
	
	//handle input
	if (input === "list"){
		//print list array
		listTodos();
	}else if (input === "new"){
		//add todos to array
		addToDo();
	}else if (input==="delete"){
		deleteToDo();
	}	
	//ask again for new input
	var input = prompt("Please enter a command");
}
console.log("you've quit the app");

function listTodos(){
	console.log("****************");
	todos.forEach(function(item, index){
		console.log((index++)+": "+item);
	});
	console.log("****************");
}

function addToDo(){
	var newToDo = prompt("Great! Let's add a new todo");
	todos.push(newToDo);
	// console.log(todos);
	console.log("todo added");
}
function deleteToDo(){
	//ask for index of todo to be deleted
	var deleteIndex = prompt("Enter index of todo to be deleted");
	//delete that todo
	//splice(index, how many after that index to remove)
	todos.splice(deleteIndex, 1);
	console.log("todo deleted");
}




// //practice forEach and for loop in accessing array
// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
// for(i=0; i<=numbers.length; i++){
// 	if(numbers[i] % 3 === 0){
// 		console.log(numbers[i]);
// 	}
// }

// numbers.forEach(function(digit){
// 	if(digit % 3 === 0){
// 		console.log(digit);
// 	}
// }); 
var todos = ["sing","dance","cook","clean","read"];

	//ask for input
var input = prompt("what would you like to do?");


while(input !== "quit"){
	
	//handle input
	if (input === "list"){
		//print list array
		console.log("****************");
		todos.forEach(function(item, index){
			console.log((index++)+": "+item);
		});
		console.log("****************");
		
	}else if (input === "new"){
		//add todos to array
		var newToDo = prompt("Great! Let's add a new todo");
		todos.push(newToDo);
		// console.log(todos);
	}


	//ask again for new input
	var input = prompt("what would you like to do?");
}
console.log("you've quit the app");



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
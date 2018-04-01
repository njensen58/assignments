var input 	= document.getElementById('input')
var button 	= document.getElementById('button')
var todo 		= document.getElementById('todo')
var done 		= document.getElementById('done')

button.addEventListener("click", onInput);


function createTask(string, onCheck) {
	var element = document.createElement("li")
	var label = document.createElement("span")
	var checkbox = document.createElement('input')


	checkbox.type = "checkbox";
	checkbox.addEventListener('click', onCheck);
	label.textContent = string;

	element.appendChild(checkbox);
	element.appendChild(label);

	return element;
}


function addTask(inputString) {
	todo.appendChild(inputString);
}


function onCheck(event) {
	var task = event.target.parentElement;
	var list = task.parentElement.id;

	if(list === "done") {
		todo.appendChild(task);
	}
	else {
		done.appendChild(task);
	}
}


function onInput() {
	var string = input.value;

	if(string.length > 0) {
		addTask(createTask(string, onCheck));
			input.value = ''
			input.focus();
	}
}

var taskData = [];
var newTaskEl = document.getElementById('newTask');
var btnOneEl = document.getElementById('btnOne');





function addNewTask(whatToDo){
	
	return {'task': whatToDo, 'date':  new Date(), 'Active': true};
	
	}




btnOneEl.addEventListener('click', function(){taskData.push(addNewTask(newTaskEl.value))},false);

// add that object to an an array of objects tasks data base.

//el.addEventListener("click", modifyText, false); use to update task status.

// Display Array in browswer




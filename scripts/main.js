var taskData = [];
var newTaskEl = document.getElementById('newTask');
var btnOneEl = document.getElementById('btnOne');
var showTasks = document.getElementById('showTasks');





function clearhField(){
	newTask.placeholder='News Task...';
}

function addNewTask(whatToDo){
	
	return {'task': whatToDo, 'date':  new Date(), 'Active': true};
	
	}

function displayTasks(){

	for (var i=taskData.length-1; i<taskData.length;i++){
		
		showTasks.insertAdjacentHTML('afterend', '<h3><span class=\'listNumbers\'> No.'+(i+1)+'</span>- '+taskData[i].task)+'</h3>';


	}
	//showTasks=' ';
	//showTasks.innerHTML;
}

//showTasks.innerHTML;
btnOneEl.addEventListener('click', 
	function(){

	taskData.push(addNewTask(newTaskEl.value));
	displayTasks();
	newTask.value=null;

			},
			false); 

// add that object to an an array of objects tasks data base.

//el.addEventListener("click", modifyText, false); use to update task status.

// Display Array in browswer




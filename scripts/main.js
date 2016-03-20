var taskData = [];




//create a task constructor
function Task(whatToDo, status, nowDate){
	this.whatToDo=whatToDo;
	this.status=true;
	this.nowDate= new Date();
	taskData.push(this);
}

// incase of click create an object called task using task constructor.


// add that object to an an array of objects tasks data base.


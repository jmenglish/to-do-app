function onReady() {
//the document object is the glue that binds JS and HTML
 const addToDoForm = document.getElementById('addToDoForm');
 const newToDoText = document.getElementById('newToDoText');
 const toDoList = document.getElementById('toDoList');

//event listener
     addToDoForm.addEventListener('submit', (event) => {
     event.preventDefault();

//event handlers (backend of to-do-list features)
     // get the text
     let title = newToDoText.value;

     // create a new li
     let newLi = document.createElement('li');

     // create a new input
     let checkbox = document.createElement('input');

     // set the input's type to checkbox
     checkbox.type = "checkbox";

     //create delete button
     let deleteButton = document.createElement('button')

//textContent property writes the content of the elmenets seen (frontend of to-do-list)

     // set the title
     newLi.textContent = title;

     // attach the checkbox to the li
     newLi.appendChild(checkbox);

     // attach the li to the ul
     toDoList.appendChild(newLi);

     //empty the input
     newToDoText.value = '';

//delete button and functionality
     //add text to delete button
     deleteButton.textContent = "Delete";

     //add delete button to newLi
		  newLi.appendChild(deleteButton);

     //delete the to-do when the delete button is clicked
		  deleteButton.addEventListener('click', event => {
			event.target.parentNode.remove();

		  });

   });

 }

//an event handler for the load event of window and passes a JS alert.
window.onload = function() {
 alert("The window has loaded!");
 onReady();
};

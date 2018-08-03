function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    ++id;
    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const deleteButton = document.createElement('button');
            deleteButton.textContent = "delete";
            deleteButton.addEventListener('click', event => {
              toDos = toDos.filter(function(item){
                return item.id !== toDo.id;
              })
            renderTheUI();
          });


      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

    });
  }

  //event listener for?
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
 }

//an event handler for the load event of window
window.onload = function() {
 onReady();
};

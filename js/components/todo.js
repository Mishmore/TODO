var Todo = () => {
  var parent = $("<div class='white-card'></div>");
  var input = $("<input id='input-item' type='text' placeholder='ingresa la tarea'></input>");
  var todotitle = $("<p>To Do List:</p>");
  var list = $("<div class='list'></div>");
  var hr = $("</hr>");
  var completedTitle = $("<p>Completed items</p>");
  var completedList = $("<div class='completed'></div>");

  parent.append(input);
  parent.append(todotitle);
  parent.append(list);
  parent.append(hr);
  parent.append(completedTitle);
  parent.append(completedList);

  input.on("keypress", (e) => {
    if (e.wich==13) {
      if (input.val() != "") {
        state.todos.push({
          text: input.val,
          completed: false
        });
        input.val("");
        reRender(list, completedList);
      }
    }
  });

  return parent
}

var reRender = (todoList, completedList) => {
  todoList.empty();
  completedList.empty();
  state.todos.forEach(todo => {
    if (!todo.completed) {
      todoList.append(TodoItem(todo,_ => {reRender(todoList, completedList);}));
    } else {
      completedList.append(TodoItem(todo,_ => {reRender(todoList, completedList); }));
    }
  });
}

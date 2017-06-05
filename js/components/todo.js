var Todo = () => {
  var parent = $("<div class='white-card'></div>");
  var input = $("<input id='input-item' type='text' placeholder='Ingresa la tarea'></input>");
  var todotitle = $("<p>To Do List:</p>");
  var list = $("<div class='list'></div>");
  var hr = $("<hr>");
  var completedTitle = $("<p>Completed items</p>");
  var completedList = $("<div class='completed checked'></div>");

  parent.append(input);
  parent.append(todotitle);
  parent.append(list);
  parent.append(hr);
  parent.append(completedTitle);
  parent.append(completedList);

  input.on("keypress", (e) => {
    if (e.which===13) {
      if (input.val() != "") {
        state.todos.push({
          text: input.val(),
          completed: false
        });
        input.val("");
        reRender(list, completedList);
      }
    }
  });

  return parent;
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

var TodoItem = (data, update) => {
  var todo = $("<div class='todo unchecked'></div>");
  var checkbox = $("<input type='checkbox' class='check-box'>");
  var span = $("<span>" + data.text + "</span>");
  var remove = $("<button>Remove</button>");

  todo.append(checkbox);
  todo.append(span);
  todo.append(remove);

  checkbox.on("change", (e) => {
    data.completed = !data.completed;
    update();
  });

  remove.on("click", (e) => {
    var idx = state.todos.map(x => x.text).indexOf(data.text);
    state.todos.splice(idx, 1);
    update();
  });
  return todo;
}

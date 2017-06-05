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
}

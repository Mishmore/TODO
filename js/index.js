var render = function(root) {
  root.empty();
  var wrapper = $("<div class='wrapper'></div>");

  wrapper.append(Header());
  wrapper.append(Todo());
  root.append(wrapper);
}

var state = {
  todos: []
};

$( _ => {
  var root = $(".root");
  render(root);
})

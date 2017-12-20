function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");
  updateCounters();
}

function updateCounters() {
  var todoCount = $(".todo").length;
  var completedCount = $(".completed").length;

  $("#total-count").html(todoCount);
  $("#completed-count").html(completedCount);
  $("#todo-count").html(todoCount - completedCount);
}

function submitTodo(event) {
  event.preventDefault();

  var title = $("#new-todo").val();
  createTodo(title);

  $("#new-todo").val(null);
  updateCounters();
}

function createTodo(title) {
  var checkboxId = "todo-" + nextTodoId();

  var listItem = $('<li class="todo"></li>');

  var checkbox = $('<input type="checkbox" id="${checkboxId}">');
  checkbox.bind('change', toggleDone);

  var space = document.createTextNode(" ");

  var label = $('<label></label>');
  label.attr('for', checkboxId);
  label.html(title);

  listItem.append(checkbox);
  listItem.append(space);
  listItem.append(label);

  $("#todolist").append( listItem );

  updateCounters();
}

function nextTodoId() {
return $(".todo").length + 1;
}

function cleanUpDoneTodos(event) {
  event.preventDefault();
  $.when(
    $(".completed").remove()
  ).then(
    updateCounters
  )
}

$(document).ready(function() {
  $("input[type=checkbox]").bind('change', toggleDone);
  $("form").bind('submit', submitTodo);
  $("#clean-up").bind('click', cleanUpDoneTodos);
  updateCounters();
});

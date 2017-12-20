function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");
}

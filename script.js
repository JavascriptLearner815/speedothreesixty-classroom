let readonlyTextareas = document.querySelectorAll("textarea[readonly]");
for (let readonlyTextarea of readonlyTextareas) {
  readonlyTextarea.classList.add("unselectable");
}

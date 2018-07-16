var id;
function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  id=event.target.id;
}

function drop(event) {
  event.target.append(document.getElementById(id));
}

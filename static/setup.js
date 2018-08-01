$(document).ready(function() {
  $('.element').draggable({ containment: '#dropzone', cursor: 'pointer'});
  $('#dropzone').droppable()
});

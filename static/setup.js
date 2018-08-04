$(document).ready(function() {
  $('.element').draggable({ containment: '#dropzone', cursor: 'pointer', helper: 'clone', revert: 'invalid'});
});

$("#dropzone").droppable({
    accept: ".element",
    drop: function(event,ui){
        var new_signature = $(ui.helper).clone().removeClass('element');
        new_signature.draggable();
        $(this).append(new_signature).attr("id", )
    }
});

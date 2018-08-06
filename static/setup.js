$(document).ready(function() {
  $('.brown').draggable({containment: '#dropzone', cursor: 'pointer', helper: 'clone', revert: 'invalid'});
  $('.grey').draggable({containment: '#dropzone', cursor: 'pointer', helper: 'clone', revert: 'invalid'});
  $('.round').draggable({containment: '#dropzone', cursor: 'pointer', helper: 'clone', revert: 'invalid'});
});

$("#dropzone").droppable({
  accept: ".brown, .grey, .round",
  drop: function(event,ui){
      var new_signature = $(ui.helper).clone();
      new_signature.draggable({containment: '#dropzone', cursor: 'pointer', revert: 'invalid'});
      $(this).append(new_signature);
      $(ui.helper).remove();
      $('.brown, .grey, .round').click(function() {
          rotation += 45;
          $(this).rotate(rotation);
      });
  }
});

var rotation = 0;
jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

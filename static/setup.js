$(document).ready(function() {
  $('.brown').draggable({containment: '#dropzone', cursor: 'pointer', helper: 'clone', revert: 'invalid'});
  $('.grey').draggable({containment: '#dropzone', cursor: 'pointer', helper: 'clone', revert: 'invalid'});
  $('.round').draggable({containment: '#dropzone', cursor: 'pointer', helper: 'clone', revert: 'invalid'});
  $('.staging').draggable({containment: '#dropzone', cursor: 'pointer', helper: 'clone', revert: 'invalid'});
});

$("#dropzone").droppable({
  accept: ".brown, .grey, .round, .staging",
  drop: function(event,ui){
      var clone = $(ui.helper).clone();
      clone.draggable({containment: '#dropzone', cursor: 'pointer', revert: 'invalid'});
      $(this).append(clone);
      $(ui.helper).remove();
      $('.brown, .grey, .staging').click(function() {
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

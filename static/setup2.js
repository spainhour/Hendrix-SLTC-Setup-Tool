$(document).ready(function() {
  var dropped = [];
  var dropzone = $("#dropzone");
  var toolbox = $("#toolBox");
  $(".brown").draggable({helper: "clone"});
  $(".grey").draggable({helper: "clone"});
  $(".round").draggable({helper: "clone"});
  $(".staging").draggable({helper: "clone"});
  dropzone.droppable({
    drop: function(event, ui) {
      var node = {
        /* Give each node a unique identifier*/
        id: (new Date).getTime(),
        /* Keep track of the position for each node so we can place each node correctly*/
        position: ui.position
      };
      /* Assigns a type to each node. The type is the type of furniture, must be updated for each new funiture added */
      if(ui.helper.hasClass("brown")) {
        node.type = "brown";
      } else if(ui.helper.hasClass("grey")) {
        node.type = "grey";
      } else if(ui.helper.hasClass("round")) {
        node.type = "round";
      } else if (ui.helper.hasClass("staging")) {
        node.type = "staging";
      }
      dropped.push(node);
      renderDropped(dropped);
    }
  });
  function renderDropped(dropped) {
    dropzone.empty();
    var html = "";
    for (var d in dropped) {
      var node = dropped[d];
      /*Set the html to match the display name for each node, must be updated each time new furniture objects are added*/
      if (node.type == "brown") {
        html = '<div style="position: absolute;text-overflow: ellipsis;width: 100px;background: rgba(255,255,255,0.66);border: 2px  solid rgba(0,0,0,0.5);border-radius: 4px; padding: 8px;text-align: center;">8 foot brown</div>';
      } else if (node.type == "grey") {
        html = '<div style="position: absolute;text-overflow: ellipsis;width: 100px;background: rgba(255,255,255,0.66);border: 2px  solid rgba(0,0,0,0.5);border-radius: 4px; padding: 8px;text-align: center;">8 foot grey</div>';
      } else if (node.type == "round") {
        html = '<div style="text-align: center;text-overflow: ellipsis;position: absolute;border-radius: 50%;background: rgba(255,255,255,0.66);behavior: url(PIE.htc);width: 80px;height: 80px;line-height: 80px;border: 2px solid rgba(0,0,0,0.5);">Round</div>';
      } else if (node.type == "staging") {
        html = '<div style="text-align: center;text-overflow: ellipsis;position: absolute;border: 2px solid rgba(0,0,0,0.5);width: 70px;height: 90px;line-height: 90px;">Staging</div>';
      } else {
        return;
      }
      var dom = $(html).css({
        "positon": "absolute",
        "top": node.position.top,
        "left":  node.position.left
      }).draggable();
      dropzone.append(dom);
    }
  }
});

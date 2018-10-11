$(document).ready(function() {
  var dropped = [];
  var dropzone = $("#dropzone");
  var toolbox = $("#toolBox");
  $(".brown").draggable({helper: "clone", invalid: "revert"});
  $(".grey").draggable({helper: "clone", invalid: "revert"});
  $(".round").draggable({helper: "clone", invalid: "revert"});
  $(".staging").draggable({helper: "clone", invalid: "revert"});
  dropzone.droppable({
    drop: function(event, ui) {
      var node = {
        /* Give each node a unique identifier*/
        id: (new Date).getTime(),
        /* Keep track of the position for each node so we can place each node correctly*/
        position: ui.helper.position()
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
      } else {
        return;
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
      }
      var dom = $(html).css({
        "positon": "absolute",
        "top": node.position.top,
        "left":  node.position.left
      }).draggable({
        stop: function(event, ui) {
          var id = ui.helper.attr("id");
          for (var i in dropped) {
            if (dropped[i].id == id) {
              dropped[i].position.top = ui.position.top;
              dropped[i].position.left = ui.position.left;
            }
          }
        }
      }).attr("id", node.id).click(function() {
          rotation += 45;
          $(this).rotate(rotation);
      });
      dropzone.append(dom);
    }
  }
  var select = document.getElementById("select_category");
  select.addEventListener("change", function() {
    var value = select.value;
    if (value == "tables") {
      displayTables();
    } else if (value == "chairs") {
      displayChairs();
    } else if (value =="other") {
      displayOther();
    }
  });
  document.getElementById("deleteContentsButton").addEventListener("click", function(){
    conf = confirm("Start over on your outline?");
    if (conf) {
      dropped = [];
      dropzone.empty();
    } else {
      return;
    }
  });
  function displayTables() {
    $("#tables_div").show();
    $("#chairs_div").hide();
    $("#other_div").hide();
  }

  function displayChairs() {
    $("#chairs_div").show();
    $("#tables_div").hide();
    $("#other_div").hide();
  }

  function displayOther() {
    $("#other_div").show();
    $("#chairs_div").hide();
    $("#tables_div").hide();
  }
});


function deleteContents() {
  confirm = confirm("Start over on your outline?");
  if (confirm) {
    dropzone.empty();
  } else {
    return;
  }
}

var rotation = 0;
jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

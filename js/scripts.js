$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("#delila").hide();
    $("#night").show();
  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("#delila").show();
    $("#night").hide();
  });
});

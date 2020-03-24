$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Meow</li>");
    $("ul#webpage").append("<li>Bark</li>");
  });

  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Bark</li>");
    $("ul#webpage").append("<li>Meow</li>");
  });

});
$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").after("<li>Meow</li>");
    $("ul#webpage").after("<li>Bark</li>");
  });

  $("button#dog").click(function() {
    $("ul#user").before("<li>Bark</li>");
    $("ul#webpage").before("<li>Meow</li>");
  });

});
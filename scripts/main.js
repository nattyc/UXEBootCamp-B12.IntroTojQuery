$("h3").css("color","tomato");
$(".copyright").replaceWith('<p class="copyright">©2014 Badass</p>');
$("nav a").on('click', function(){
  alert("sweet");
  });
$("figure").click(function(){
  $("img").toggle(35000,"swing");
  });

$( "p, ul, h1" ).click(function() {
  $( this ).toggleClass( "highlight" );
  });

$( ".banner" ).hover(function() {
  $( this ).toggleClass( "highlight" );
  });



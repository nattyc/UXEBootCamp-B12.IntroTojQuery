
$("a").on('click',
  function(){
    alert("sweet");
  });

$( "p, ul, h1" ).click(function() {
  $( this ).toggleClass( "highlight" );
  });

//not awesome, but works :)
$( ".banner" ).hover(
  function() {
    $(this).css("background-image","url('http://placekitten.com/960/600')");
  },
  function() {
    $(this).css("background-image","#FFF");
  }
  );

$( "body" ).keypress(function() {
  $(this).toggleClass("keydown");
  $( ".extra" ).toggleClass("extra2");

});

$('#expand-blue').on('click', function() {
  $(this).toggleClass('close-blue');
  $('.text').toggleClass('open-blue')
  .end();
});


var w = Math.round($(document).width() / 255);
var h = Math.round($(document).height() / 255);
var body = $("body");

$(document).mousemove(function(e){
    var pageX = Math.round(e.pageX / w);
    var pageY = Math.round(e.pageY / h);
    body.css("background-color", "rgb("+pageX+","+pageY+","+pageX+")");
});



// $( "p, ul, h1" ).click(function() {
//   $( this ).fadeToggle("slow",function(){
//   }).toggleClass( "highlight" );
//   });



$("h3").css("color","tomato");

$(".copyright").replaceWith('<p class="copyright">©2014 Badass</p>');

$("nav a").on('click',
  function(){
    alert("sweet");
  });

$("figure").click(function(){
  $("img").toggle(10000,"linear");
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

$("button").click(
  function() {
  var dis = $(this);
  var otherWords =dis.data('phrase');
  //is there a way to do this without data? look into this
  var finalOutput = otherWords + ' :O';
  if (dis.text() === finalOutput) {
    dis.text(dis.data('text'));
  }
  else {
    dis.data('text', dis.text());
    dis.text(finalOutput);
  }
  $("body").toggleClass("highlight")
  });



// $( "p, ul, h1" ).click(function() {
//   $( this ).fadeToggle("slow",function(){
//   }).toggleClass( "highlight" );
//   });



$(document).ready(function(){
  $("#ad").load("https://jsonplaceholder.typicode.com/","body");
  //hides the function so that slideToggle works seamlessly
  $(".dropdown-item").hide()
  $('.dropdown').on('hide.bs.dropdown', function (e) {
    if (e.clickEvent) {
      e.preventDefault();
    }
  })
  //first is the counter for the carousel
  var first = 1;
  //colors is an array of strings that the box-shadow will iterate through in changeImage()
  //card_text is an array of strings that the text of the card-text <p> will iterate through
  var energy = Array("Nuclear Power","Wind Turbine","Hydroelectric","Solar Panels","Geothermal");
  var colors = Array("darkorange","lightblue","blue","yellow","red");
  var card_text = Array("Powerful, but volataile.","Steady, but unreliable.","Constant, but limited.","Wide-spread, but low-energy.","Stable, but expensive")
  //increments or decrements first depending on whether the 'next' or 'previous button was clicked
  //then, after validating that 1 <= first <= data-max, changes text and src accordingly
  function changeImage(count){
    first += count;
    if(first>$("#carousel").data('max')){
      first = 1;
    };
    if(first<1){
      first = $("#carousel").data('max');
    }
    $("#types").attr('src', "assets/" + first + ".png");
    $("#carousel").css('box-shadow', "0px 4px 4px 4px " + colors[first-1]);
    $("#describe").text(card_text[first-1]);
    $("#energy").text(energy[first-1]);
  }
  //event handlers on buttons to call changeImage()
  $("#next").click(function(){changeImage(1)});
  $("#previous").click(function(){changeImage(-1)});
  $("#tech").click(function(){
    $(".dropdown-item").fadeToggle('medium');
  })
  //to prevent errors with the animation if the user double clicks
  $(".navbar-brand").click(function(){
    window.location = "index.html";
  })
  $("#types").click(function(){
    window.location = first + ".html";
  })
});
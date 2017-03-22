// This is the Jquery file for the Jericho House Website, aside from smooth scroll and parallax

// These lines are meant to initially hide the parts of the bios that will be shown later.
$("#larryhidden").hide();
$("#kevinhidden").hide();
$("#markhidden").hide();
$("#brantleyhidden").hide();
$("#joelhidden").hide();
$("#brianhidden").hide();
$("#larryless").hide();
$("#kevinless").hide();
$("#markless").hide();
$("#brantleyless").hide();
$("#joelless").hide();
$("#brianless").hide();


//Every person in the staff section has their own jquery functionality

//This first block fades the paragraph in, reduces the pic size,
//hides the 'read more' button and shows the 'hide' button.
$(document).ready(function(){
  $("#larrybutton").click(function(){
    $("#larryhidden").fadeToggle(500);
    $("#larrybutton").hide();
    $("#larryless").show();
         $(".larryimage").animate(
             {"height": "190px", "width":"190px"},800);
  });
});


//This second block hides the paragraph out, increases the pic size,
//shows the 'read more' button and hides the 'hide' button.

$(document).ready(function(){
  $("#larryless").click(function(){
    $("#larryhidden").fadeToggle(500);
    $("#larryless").hide();
    $("#larrybutton").show();
         $(".larryimage").animate(
             {"height": "250px", "width":"250px"},800);

  });
});

//Kevin Buttons
$(document).ready(function(){
  $("#kevinbutton").click(function(){
    $("#kevinhidden").fadeToggle(500);
    $("#kevinbutton").hide();
    $("#kevinless").show();
         $(".kevinimage").animate(
             {"height": "190px", "width":"190px"},800);
  });
});

$(document).ready(function(){
  $("#kevinless").click(function(){
    $("#kevinhidden").fadeToggle(500);
    $("#kevinless").hide();
    $("#kevinbutton").show();
         $(".kevinimage").animate(
             {"height": "250px", "width":"250px"},800);

  });
});


//mark Buttons

$(document).ready(function(){
  $("#markbutton").click(function(){
    $("#markhidden").fadeToggle(500);
    $("#markbutton").hide();
    $("#markless").show();
         $(".markimage").animate(
             {"height": "190px", "width":"190px"},800);
  });
});

$(document).ready(function(){
  $("#markless").click(function(){
    $("#markhidden").fadeToggle(500);
    $("#markless").hide();
    $("#markbutton").show();
         $(".markimage").animate(
             {"height": "250px", "width":"250px"},800);

  });
});


//Brantley Buttons
$(document).ready(function(){
  $("#brantleybutton").click(function(){
    $("#brantleyhidden").fadeToggle(500);
    $("#brantleybutton").hide();
    $("#brantleyless").show();
         $(".brantleyimage").animate(
             {"height": "190px", "width":"190px"},800);
  });
});

$(document).ready(function(){
  $("#brantleyless").click(function(){
    $("#brantleyhidden").fadeToggle(500);
    $("#brantleyless").hide();
    $("#brantleybutton").show();
         $(".brantleyimage").animate(
             {"height": "250px", "width":"250px"},800);

  });
});

//Joel Buttons

$(document).ready(function(){
  $("#joelbutton").click(function(){
    $("#joelhidden").fadeToggle(500);
    $("#joelbutton").hide();
    $("#joelless").show();
         $(".joelimage").animate(
             {"height": "190px", "width":"190px"},800);
  });
});

$(document).ready(function(){
  $("#joelless").click(function(){
    $("#joelhidden").fadeToggle(500);
    $("#joelless").hide();
    $("#joelbutton").show();
         $(".joelimage").animate(
             {"height": "250px", "width":"250px"},800);

  });
});

//Brian Buttons
$(document).ready(function(){
  $("#brianbutton").click(function(){
    $("#brianhidden").fadeToggle(500);
    $("#brianbutton").hide();
    $("#brianless").show();
         $(".brianimage").animate(
             {"height": "190px", "width":"190px"},800);
  });
});

$(document).ready(function(){
  $("#brianless").click(function(){
    $("#brianhidden").fadeToggle(500);
    $("#brianless").hide();
    $("#brianbutton").show();
         $(".brianimage").animate(
             {"height": "250px", "width":"250px"},800);

  });
});
//This is the Jquery for the modal window
//that pops up when the 'Testimonies' image
//on the home page is clicked on

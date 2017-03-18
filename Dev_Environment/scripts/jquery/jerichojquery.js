// This is the Jquery file for the Jericho House Website, aside from smooth scroll and parallax

// These lines are meant to initially hide the parts of the bios that will be shown later.
$("#larryhidden").hide();
$("#kevinhidden").hide();
$("#jessehidden").hide();
$("#brantleyhidden").hide();
$("#joelhidden").hide();
$("#larryless").hide();
$("#kevinless").hide();
$("#jesseless").hide();
$("#brantleyless").hide();
$("#joelless").hide();



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


//Jesse Buttons

$(document).ready(function(){
  $("#jessebutton").click(function(){
    $("#jessehidden").fadeToggle(500);
    $("#jessebutton").hide();
    $("#jesseless").show();
         $(".jesseimage").animate(
             {"height": "190px", "width":"190px"},800);
  });
});

$(document).ready(function(){
  $("#jesseless").click(function(){
    $("#jessehidden").fadeToggle(500);
    $("#jesseless").hide();
    $("#jessebutton").show();
         $(".jesseimage").animate(
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


//This is the Jquery for the modal window
//that pops up when the 'Testimonies' image
//on the home page is clicked on

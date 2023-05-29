$("#hide").click(function(){
  $(".show-hide").hide();
});

$("#show").click(function(){
  $(".show-hide").show();
});


$(".fadebtn").click(()=>{
  $("#div2").fadeToggle("slow");
})


$("#filpbtn").click(function(){
  console.log("Run")
  $("#panel").slideToggle();
  
});
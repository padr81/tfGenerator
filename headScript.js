$(document).ready(function(){
    $("[name=headSlider]").change(function(){
          var value = $(this).val();
          $(this).next().text(value);
          var image_name = value; 
          $('#formula2').attr('src', "img/heads/head" + image_name + ".png");
      });
  });
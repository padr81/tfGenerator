$(document).ready(function(){
    $("[name=baseSlider]").change(function(){
          var value = $(this).val();
          $(this).next().text(value);
          var image_name = value; 
          $('#formula3').attr('src', "img/bases/base" + image_name + ".png");
      });
  });
$(document).ready(function(){
    $("[name=bodySlider]").change(function(){
          var value = $(this).val();
          $(this).next().text(value);
          var image_name = value; 
          $('#formula').attr('src', "img/bodies/body" + image_name + ".png");
      });
  });
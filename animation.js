$(document).ready(function() {
    // get the image elements
    var baseImg = $('#formula3');
    var bodyImg = $('#formula');
    var headImg = $('#formula2');
  
    // listen for slider changes
    $('.slider').on('input', function() {
      // update the images based on the slider values
      var baseVal = $('#baseSlider').val();
      var bodyVal = $('#bodySlider').val();
      var headVal = $('#headSlider').val();
  
      baseImg.attr('src', 'img/bases/base' + baseVal + '.png');
      bodyImg.attr('src', 'img/bodies/body' + bodyVal + '.png');
      headImg.attr('src', 'img/heads/head' + headVal + '.png');
    });
  });
  
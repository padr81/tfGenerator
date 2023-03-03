function merge() {
    alert("Merging Image");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // clear canvas and remove old layers
    ctx.clearRect(0, 0, c.width, c.height);
    var oldLayer1 = document.getElementById("layer1");
    var oldLayer2 = document.getElementById("layer2");
    var oldLayer3 = document.getElementById("layer3");
    if (oldLayer1) oldLayer1.parentNode.removeChild(oldLayer1);
    if (oldLayer2) oldLayer2.parentNode.removeChild(oldLayer2);
    if (oldLayer3) oldLayer3.parentNode.removeChild(oldLayer3);
  
    var imageObj1 = new Image();
    var imageObj2 = new Image();
    var imageObj3 = new Image();
    imageObj1.src = document.getElementById("formula3").src;
    imageObj1.onload = function() {
      ctx.drawImage(imageObj1, 0, 0, 234, 432);
      imageObj2.src = document.getElementById("formula").src;
      imageObj2.onload = function() {
        ctx.drawImage(imageObj2, 0, 0, 234, 432);
        imageObj3.src = document.getElementById("formula2").src;
        imageObj3.onload = function() {
          ctx.drawImage(imageObj3, 0, 0, 234, 432);
          // create new layer with merged image
          var img = c.toDataURL("image/png");
          var newLayer = document.createElement("img");
          console.log(newLayer);
          newLayer.src = img;
          newLayer.id = "layer1";
          newLayer.style.position = "absolute";
          newLayer.style.top = "0px";
          newLayer.style.left = "0px";
          document.querySelector(".nparent").appendChild(newLayer);
          downloadBtn.disabled = false;
          downloadBtn.classList.remove("disabled");
          downloadBtn.addEventListener('click', function() {
            download(img, "merged.png", "image/png");
          });
        };
      };
    };
  }
  
  function download() {
    setTimeout(function() {
      var link = document.createElement('a');
      link.download = 'image.png';
      link.href = document.getElementById('myCanvas').toDataURL();
      link.click();
    }, 100);
  }
  
  let mergeBtn = document.getElementById("dlbutton");
  mergeBtn.addEventListener('click', function() {
    merge();
  });
  
  let downloadBtn = document.getElementById("dlbutton2");
  downloadBtn.addEventListener('click', function() {
    download();
  });
  
  
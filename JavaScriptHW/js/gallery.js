function upDate(previewPic){

    let altText = previewPic.alt;
    let source = previewPic.src;
     document.getElementById("image").innerHTML = '<div style="height:100%;background-image:url(' + "'" + source + "');" +'">'+ altText+ '</div>' ;
      }
  
  function unDo(){
      const altText = "Hover over an image below to display here.";
     document.getElementById("image").innerHTML =altText;
  }
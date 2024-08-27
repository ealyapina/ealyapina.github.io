function upDate(previewPic){

    let altText = previewPic.alt;
    let source = previewPic.src;
    document.getElementById("image").innerHTML=altText;
    document.getElementById("image").style.backgroundImage = "url(" + source + ")";
      }
  
  function unDo(){
      const altText = "Hover over an image below to display here.";
      document.getElementById("image").innerHTML =altText;
      document.getElementById("image").style.backgroundImage = 'url("")';

  }
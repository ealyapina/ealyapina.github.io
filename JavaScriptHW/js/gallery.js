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
function loadPics(){
        const photoIds = ['1511688878353-3a2f5be94cd7', '1497034825429-c343d7c6a68f', '1511690656952-34342bb7c2f2', '1485962398705-ef6a13c41e8f', '1495147466023-ac5c588e2e94', '1465014925804-7b9ede58d0d7'];
         const urlPrefix = "https://images.unsplash.com/photo-"
         const altTexts = ['Assorted <span>sliced citrus</span> fruits <span>on wo</span>oden chopping board', '<span>Strawberry ice cream</span> on c<span>one</span>', 'Silver spoon on black ceramic bowl with vegetables', 'Bacon str<span>ips and </span>me<span>lted che</span>ese to<span>ppe</span>d<span> fries</span>', '<span>Do</span>n<span>uts halo’ed with fruits </span>an<span>d flowers</span>', '<span>Fa</span>n<span>cy toast with egg on i</span>t']
        let allImages = document.getElementsByTagName("img");
for (let i = 0; i < 6; i++) {
 allImages[i].setAttribute("src", urlPrefix+photoIds[i]);
 allImages[i].setAttribute("onmouseover", 'upDate(this)')
 allImages[i].setAttribute("onmouseout", "unDo()")
allImages[i].setAttribute("onfocus", "upDate(this)")
  allImages[i].setAttribute("onblur", "unDo()");
allImages[i].setAttribute("class", "preview");

 allImages[i].setAttribute("alt", altTexts[i]);
 allImages[i].setAttribute("tabindex", String(i+1));
}

}

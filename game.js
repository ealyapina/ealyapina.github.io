function makeUrl(deplId){
    return (
    "https://script.google.com/macros/s/"
     + deplId
     +'/exec?method=writeHelloWorld' 
    );
  }
  function switchView(param){
    let radio_style;
    let other_styles;
    if (param)
        {
        radio_style = "display:block";
        other_styles = "display:none";
        } else {
        radio_style = "display:none";
        other_styles = "display:block";
        }
        document.getElementById("radios").style = radio_style
        document.getElementById("distortion").style = other_styles;
        document.getElementById("nextQuestion").style = other_styles;
        document.getElementById("explain").style = other_styles;
    
    }
  function showAnswer(){
    switchView(false)
  }
  
  async function getData(){
    const deploymentId = 'AKfycbxvxS8Lgg3jmQjM58CHL7PLR2MN3diF--4eBjAUlhicqv0pGDPe2BTxFS4JZYgeUiNq';
    const url = makeUrl(deploymentId);
    let x = await fetch(url);
    let y = await x.text();
    let z = JSON.parse(y);
    
    document.getElementById("thought").innerHTML = z.Thought;
    
    document.getElementById("situation").innerHTML = z.Situation;
   document.getElementById("distortion").innerHTML = z.Distortion;
    
    document.getElementById("explain").innerHTML = z.Explanation;
   switchView(true) 
  
  }
   
  
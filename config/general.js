function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }

  var numSlide=1;
	var vids = ["", "BRLx4lMetu4", "RG5Fi-eCLbc", "HLeOS8oU_nk", "BRLx4lMetu4", "RG5Fi-eCLbc", "HLeOS8oU_nk", "BRLx4lMetu4", "RG5Fi-eCLbc"];
	
	function showslide(){
	document.getElementById('video').src="https://www.youtube.com/embed/"+vids[numSlide];
	}

  function topButton() {
    if(document.getElementById("toplinks").style.display == 'inline-block'){
    document.getElementById("toplinks").style.display = 'none';}
    else{document.getElementById("toplinks").style.display = 'inline-block';}
  }

  function hideButton() {
    document.getElementById("toplinks").style.display = 'none';
  }

  function openNav(num) {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById('video').src="https://www.youtube.com/embed/"+vids[numSlide];
    numSlide=num;
		showslide();
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    numSlide=0;
		showslide();
  }


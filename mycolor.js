
  function main(){
  	chrome.tabs.executeScript({
    	file: 'another.js'
     }); 
  	document.body.style.backgroundColor = "red";
  }

  function removeShadow(){
  	chrome.tabs.executeScript({
    	file: 'remove-shadow.js'
     }); 
  	document.body.style.backgroundColor = "red";
  }

  document.getElementById("colorMe").addEventListener("click", main);
  document.getElementById("removeShadow").addEventListener("click", removeShadow);
  

    






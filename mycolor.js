
  function main(){
  	chrome.tabs.executeScript({
    	file: 'another.js'
     }); 
  	document.body.style.backgroundColor = "red";
  }

  document.getElementById("colorMe").addEventListener("click", main);

    






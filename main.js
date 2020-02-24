//HTML INTERACTION 
'use strict';

// Event Listener
document.getElementById('img1').addEventListener('click', clickHandler);

//Event Functions
function clickHandler() {
    //Update content 
    document.getElementById("main-heading").innerHTML = "AWESOME HEADING!";

    //Update source attribute of image
    document.getElementById('img1').src = "images/lorem-ipsum2.jpg";
}


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

    //Update href or link
    document.getElementById('link1').href = 'https://www.w3schools.com/';

    //Update Style
    document.getElementById('para2').style.fontFamily = 'Papyrus'; 
    document.getElementById('para2').style.color = 'grey';

    //Add a class to an element
    document.getElementById('li2').classList.add('center');
}


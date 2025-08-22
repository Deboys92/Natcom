function makeBigger() {
document.getElementById("mon_text").style.fontSize=24 
}


function togglebackground() {
    if (isGreen) {
        document.body.style.backgroundColor = "white"; 
      } else {
        document.body.style.backgroundColor = "green"; 
      }
      isGreen = !isGreen; 
}
function showDateTime() {
      const now = new Date(); 
      document.getElementById("dateTime").innerHTML = now;
    }


   
    function hideImage() {
      document.getElementById("myImage").style.display = "none";
    }

    function showImage() {
      document.getElementById("myImage").style.display = "block";
    }


    function multiplyNumbers() {
      let num1 = 5;  
      let num2 = 7;  
      let result = num1 * num2; 
      alert("The result is: " + result);
    }
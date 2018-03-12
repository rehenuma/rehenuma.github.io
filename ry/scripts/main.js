var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dina.jpg') {
      myImage.setAttribute ('src','images/dina1.jpg');
    }else {
	  myImage.setAttribute ('src','images/dina.jpg');
	}
   
}
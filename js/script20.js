window.onload = choosePic;

var myPix = new Array("exersises/shoulder/1.gif","exersises/shoulder/2.gif","exersises/shoulder/3.gif","exersises/shoulder/4.gif","exersises/shoulder/5.gif","exersises/shoulder/6.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
window.onload = choosePic;

var myPix = new Array("exersises/back pain/1.gif","exersises/back pain/2.gif","exersises/back pain/3.gif","exersises/back pain/4.gif","exersises/back pain/5.gif","exersises/back pain/6.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
window.onload = choosePic;

var myPix = new Array("exersises/knee pain/1.gif","exersises/knee pain/2.jpg","exersises/knee pain/3.gif","exersises/knee pain/4.gif","exersises/knee pain/5.jpg","exersises/knee pain/6.gif","exersises/knee pain/7.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
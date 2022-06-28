window.onload = choosePic;

var myPix = new Array("exersises/leg pain/1.gif","exersises/leg pain/2.gif","exersises/leg pain/3.gif","exersises/leg pain/4.gif","exersises/leg pain/5.gif","exersises/leg pain/6.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
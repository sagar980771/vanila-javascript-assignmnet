(function() {
  var imageWidth = 500;
  var imageHeight = 300;
  var imagesArray = []; 
  for (var i = 1; i <= 10; i++) {
    fetch('https://picsum.photos/id/' + i + '/' + imageWidth + '/' + imageHeight)
      .then(function (response) {
        var img = document.createElement("img");
        img.setAttribute('src', response.url);
        img.classList.add('mySlides');
        img.style.width="100%";
        // mySlidesDiv.appendChild(img);
        document.getElementById('sliderBox').appendChild(img);
      });
  }
})();
var slideIndex = 1;
setTimeout(function() {showDivs(slideIndex)}, 1000);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  console.log(document.getElementsByClassName("mySlides"));
  x[slideIndex-1].style.display = "block";  
}
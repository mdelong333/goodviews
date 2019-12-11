// why it doesn't work on firefox?
var card = $(".card");
var star = document.getElementById("star");

$(document).on("mousemove", function(e) {
  var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
  var ay = ($(window).innerHeight() / 2 - e.pageY) / 10;
  card.attr(
    "style",
    "transform: rotateY(" +
      ax +
      "deg) rotateX(" +
      ay +
      "deg);-webkit-transform: rotateY(" +
      ax +
      "deg) rotateX(" +
      ay +
      "deg);-moz-transform: rotateY(" +
      ax +
      "deg) rotateX(" +
      ay +
      "deg)"
  );
});

function star() {
  if (star.innerHTML === "star") {
    star.innerHTML = "star_border";
  }
  if (star.innerHTML === "star_border") {
    star.innerHTML = "star";
  }
}

// $(star).click(function() {
//   this.innerHTML = "star";
// });

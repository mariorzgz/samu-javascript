window.onscroll = function() {color()};

function color() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").className = "white";
    console.log("hey");
  } else {
    document.getElementById("logo").className = "";
    console.log("o");
  }
}

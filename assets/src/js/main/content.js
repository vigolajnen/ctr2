var blocks = document.querySelectorAll(".block-w");
blocks.forEach(function(block) {
  block.addEventListener("mouseover", function(evt) {
    evt.preventDefault();
    block.querySelector(".block-control").style.opacity = "1";
  });
  block.addEventListener("mouseout", function(evt){
    evt.preventDefault();
    block.querySelector(".block-control").style.opacity = "0";
  });
});

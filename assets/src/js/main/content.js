(function() {
  var blocks = document.querySelectorAll(".block-w");
  blocks.forEach(function(block) {
    block.addEventListener("mouseover", function(evt) {
      evt.preventDefault();

      block.classList.add("block-w--br");
      block.querySelector(".block-control").style.opacity = "1";
      if (block.querySelector(".block-name"))
        block.querySelector(".block-name").style.opacity = "1";

      if (block.querySelector(".block-add"))
        block.querySelector(".block-add").style.opacity = "1";
    });

    block.addEventListener("mouseout", function(evt) {
      evt.preventDefault();

      block.classList.remove("block-w--br");
      block.querySelector(".block-control").style.opacity = "0";
      if (block.querySelector(".block-name"))
        block.querySelector(".block-name").style.opacity = "0";
      if (block.querySelector(".block-add")) {
        block.querySelector(".block-add").style.opacity = "0";
      }
    });
  });
})();

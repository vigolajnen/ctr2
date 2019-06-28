(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var controlBlocks = document.querySelectorAll(".block-control__item");
    var controlItems = document.querySelectorAll(".block-control__btn");

    controlItems.forEach(function(item) {
      item.addEventListener("click", function(evt) {
        evt.preventDefault();

        controlBlocks.forEach(function(item) {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
          }
        });

        item.parentElement.classList.add("active");
      });
    });
  });
})();

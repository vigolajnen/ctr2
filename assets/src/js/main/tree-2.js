(function() {
  var items = document.querySelectorAll(".expand");
  items.forEach(function(item) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();
      var parent = item.parentElement;
      console.log(parent);
      if (parent.classList.contains("expand-closed")) {
        parent.classList.remove("expand-closed");
        parent.classList.add("expand-open");
      } else if (parent.classList.contains("expand-open")) {
        parent.classList.remove("expand-open");
        parent.classList.add("expand-closed");
      }
    });
  });
})();

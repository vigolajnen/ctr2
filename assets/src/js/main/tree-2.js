(function() {
  var nodes = document.querySelectorAll('.node');
  nodes.forEach(function(node){
    node.addEventListener('click', function(evt) {
      evt.preventDefault();
      if (node.classList.contains("expand-open")) {
        node.classList.remove("expand-open");
        node.classList.add("expand-closed");
      } else if (node.classList.contains("expand-close")) {
        node.classList.add("expand-open");
        node.classList.remove("expand-closed");
      }
    });
  });
})();

(function() {
  parent.postMessage({
    source: 3,
    type: "code page",
    target: 3
  });
  if (document.querySelector(".js-bl-modal-close")) {
    document.querySelector(".js-bl-modal-close").addEventListener("click", function(evt) {
      parent.postMessage({
        source: 3,
        type: "close",
        target: 3
      });
    });
  }
  
})();

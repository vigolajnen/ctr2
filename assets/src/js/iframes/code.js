(function() {
  parent.postMessage({
    source: 2,
    type: "code page",
    target: 2
  });

  if (document.querySelector(".js-bl-modal-close")) {
    document.querySelector(".js-bl-modal-close").addEventListener("click", function(evt) {
      parent.postMessage({
        source: 2,
        type: "close",
        target: 2
      });
    });
  }
  
})();

(function() {
  parent.postMessage({
    source: 3,
    type: "code page",
    target: 3
  });
  if (document.querySelector(".js-btn-close")) {
    document.querySelector(".js-btn-close").addEventListener("click", function(evt) {
      parent.postMessage({
        source: 3,
        type: "close",
        target: 3
      });
    });
  }

})();

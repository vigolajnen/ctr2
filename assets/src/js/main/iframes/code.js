(function() {
  // parent.postMessage({
  //   source: 2,
  //   type: "code page",
  //   target: 2
  // });

  var codeButton = document.querySelector("span[data-index='2']");
  if (codeButton) {
    codeButton.addEventListener("click", function(evt) {
      console.log(evt);
      evt.preventDefault();
      parent.postMessage(
        {
          source: 2,
          type: "code page",
          target: 2
        },
        "*"
      );
    });
  }

  if (document.querySelector(".js-btn-close")) {
    document.querySelector(".js-btn-close").addEventListener("click", function(evt) {
      parent.postMessage({
        source: 2,
        type: "close",
        target: 2
      });
    });
  }

})();

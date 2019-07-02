(function() {
  var codeButton = document.querySelector("span[data-index='2']");
  if (codeButton) {
    codeButton.addEventListener("click", function(evt) {

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
})();

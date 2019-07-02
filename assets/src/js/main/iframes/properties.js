(function() {
  var propertiasButton = document.querySelector("span[data-index='10']");
  if (propertiasButton) {
    propertiasButton.addEventListener("click", function(evt) {

      evt.preventDefault();
      parent.postMessage(
        {
          source: 10,
          type: "properties page",
          target: 10
        },
        "*"
      );
    });
  }
})();

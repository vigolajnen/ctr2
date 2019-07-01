(function() {
  // parent.postMessage({
  //   source: 10,
  //   type: "properties page",
  //   target: 10
  // });

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
  // if (document.querySelector(".js-btn-close")) {
  //   document
  //     .querySelector(".js-btn-close")
  //     .addEventListener("click", function(evt) {
  //       parent.postMessage({
  //         source: 10,
  //         type: "close",
  //         target: 10
  //       });
  //     });
  // }
})();

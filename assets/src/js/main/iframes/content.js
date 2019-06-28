(function() {
  var widgetButton = document.querySelector("span[data-index='6']");
  if (widgetButton) {
    widgetButton.addEventListener("click", function(evt) {
      console.log(evt);
      evt.preventDefault();
      parent.postMessage(
        {
          source: 0,
          type: "edit",
          target: 6
        },
        "*"
      );
    });
  }

  if (document.querySelector("button[data-index='1']")) {
    document
      .querySelector("button[data-index='1']")
      .addEventListener("click", function(evt) {
        console.log(evt);
        evt.preventDefault();

        parent.postMessage(
          {
            source: 0,
            type: "widget",
            target: 1
          },
          "*"
        );
      });
  } else if (document.querySelector("span[data-index='10']")) {
    document
      .querySelector("span[data-index='10']")
      .addEventListener("click", function(evt) {
        console.log(evt);
        evt.preventDefault();

        parent.postMessage(
          {
            source: 0,
            type: "properties",
            target: 10
          },
          "*"
        );
      });
  }
})();

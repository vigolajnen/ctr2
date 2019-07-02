(function() {
  var widgetButtons = document.querySelectorAll("span[data-index='6']");
  if (widgetButtons) {
    widgetButtons.forEach(function(widgetButton) {
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
    });
  }

  var widgetButtons2 = document.querySelectorAll("span[data-index='10']");
  if (widgetButtons2) {
    widgetButtons2.forEach(function(widgetButton) {
      widgetButton.addEventListener("click", function(evt) {
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
    });
  }

  var widgetButtons3 = document.querySelectorAll("button[data-index='1']");
  if (widgetButtons3) {
    widgetButtons3.forEach(function(widgetButton) {
      widgetButton.addEventListener("click", function(evt) {
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
    });
  }
})();

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
    document.querySelector("button[data-index='1']").addEventListener('click', function (evt) {
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
  }
  
})();

(function() {
  var items = document.querySelectorAll(".tabs__item");
  var contents = document.querySelectorAll(".tabs__panel");

  items.forEach(function(item) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();

      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
      for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
      }

      var tabName = this.getAttribute("data-tab");

      var activeItem = document.querySelector(
        ".tabs__item[data-tab='" + tabName + "']"
      );
      var activeContent = document.querySelector(
        ".tabs__panel[data-tab='" + tabName + "']"
      );

      activeItem.classList.add("active");
      activeContent.classList.add("active");
    });
  });

  var jsTriggersSub = document.querySelectorAll(".js-subtab-trigger");
  jsTriggersSub.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      var id = this.getAttribute("data-subtab"),
        content = document.querySelector(
          '.js-subtab-content[data-subtab="' + id + '"]'
        ),
        activeTrigger = document.querySelector(".js-subtab-trigger.active"),
        activeContent = document.querySelector(".js-subtab-content.active");

      activeTrigger.classList.remove("active");
      trigger.classList.add("active");

      activeContent.classList.remove("active");
      content.classList.add("active");
    });
  });
})();

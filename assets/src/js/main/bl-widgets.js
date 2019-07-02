(function() {
  var widgets = document.querySelectorAll(".bl-widgets__item");
  widgets.forEach(function(item) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();
      var tabName = this.getAttribute("data-group");
      var tabContent = document.querySelector(
        ".bl-widgets__group-item[data-group='" + tabName + "']"
      );
      var tabItemActive = document.querySelector(".bl-widgets__item.active"),
        tabContentActive = document.querySelector(
          ".bl-widgets__group-item.active"
        );

      tabItemActive.classList.remove("active");
      item.classList.add("active");

      tabContentActive.classList.remove("active");
      tabContent.classList.add("active");
    });
  });
})();

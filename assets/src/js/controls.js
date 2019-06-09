"use strict";

// 
var controlsWrapper = document.querySelector(".block-control");
var controlItems = document.querySelectorAll(".block-control__btn");

if (controlsWrapper) {
  controlsWrapper.addEventListener("click", function(evt) {
    evt.preventDefault();
    var activeItem = evt.target;
    if (activeItem.tagName != "SPAN") return;

    for (var i = 0; i < controlItems.length; i++) {
      controlItems[i].parentNode.classList.remove("active");
    }

    activeItem.parentNode.classList.add("active");
  });
}

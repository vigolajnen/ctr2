// модальные окна
(function () {
  document.addEventListener("DOMContentLoaded", function() {
    
    var modalButtons = document.querySelectorAll(".js-bl-modal-btn"),
      overlay = document.querySelector(".js-overlay-bl-modal"),
      closeButtons = document.querySelectorAll(".js-bl-modal-close");

    modalButtons.forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.preventDefault();

        var modalId = this.getAttribute("data-index");
        if (modalId) {
          var modalElem = document.querySelector(
            '.bl-modal[data-index="' + modalId + '"]'
          );
        }
        
        if (modalElem) {
          modalElem.classList.add("active");
          overlay.classList.add("active");
        }
        
      });
    });

    closeButtons.forEach(function(item) {
      item.addEventListener("click", function(e) {
        var parentModal = this.closest(".bl-modal");

        parentModal.classList.remove("active");
        if (overlay) {
          overlay.classList.remove("active");
        }
        
      });
    });

    document.body.addEventListener(
      "keyup",
      function(e) {
        var key = e.keyCode;

        if (key == 27) {
          document.querySelector(".bl-modal.active").classList.remove("active");
          document
            .querySelector(".bl-modal__overlay")
            .classList.remove("active");
        }
      },
      false
    );

    if (overlay) {
      overlay.addEventListener("click", function() {
        document.querySelector(".bl-modal.active").classList.remove("active");
        this.classList.remove("active");
      });
    }
  });
})();

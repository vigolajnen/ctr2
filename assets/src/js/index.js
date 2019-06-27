(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var openIframes = document.querySelectorAll(".js-bl-modal-btn");

    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");
        var blockEdit = document.querySelector(
          ".w-edit[data-index='" + idBtn + "']"
        );

        if (blockEdit) {
          blockEdit.classList.add("active");
          blockEdit.parentElement.classList.add("active");
        }

        var blClose = document.querySelectorAll(".w-close");
        blClose.forEach(function(bl) {
          bl.classList.remove("active");
          bl.parentElement.classList.remove("active");
        });

        // document.addEventListener("keypress", function(evt) {
        //   if (evt.keyCode === 27) {
        //     console.log("escape pressed");
        //   }
        // });

        if (idBtn == 7) {
          document.querySelector(".wrapper").classList.add("wrapper-xs");
          document.querySelector(".wrapper").classList.remove("wrapper-sm");
        } else if (idBtn == 8) {
          document.querySelector(".wrapper").classList.add("wrapper-sm");
          document.querySelector(".wrapper").classList.remove("wrapper-xs");
        } else if (idBtn == 9) {
          document.querySelector(".wrapper").classList.remove("wrapper-xs");
          document.querySelector(".wrapper").classList.remove("wrapper-sm");
        }
      });
    });

    var closeButtons = document.querySelectorAll(".js-bl-modal-close");
    closeButtons.forEach(function(item) {
      item.addEventListener("click", function(e) {
        var parentModal = this.closest(".bl-modal");

        parentModal.classList.remove("active");
        parentModal.parentElement.classList.remove("active");
      });
    });

    var subBtn = document.querySelector(".js-bl-modal-btn-sub");
    if (subBtn) {
      subBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        document
          .querySelector(".w-edit[data-index='5']")
          .classList.add("active");
        document
          .querySelector(".w-edit[data-index='5']")
          .parentElement.classList.add("active");
      });
    }

    // var overlay = document.querySelectorAll(".overlay");
    // overlay.forEach(function(item) {
    //   item.addEventListener("click", function(evt) {

    //     item.firstElementChild.addEventListener('click', function(evt) {
    //       evt.preventDefault();
    //       console.log("firstElementChild");
    //       item.classList.add("active");
    //     });

    //     item.classList.remove("active");
    //     // item.firstElementChild.classList.remove("active");

    //   });
    // });
  });

  window.addEventListener("message", function(evt) {
    var openIframes = document.querySelectorAll(".js-bl-modal-btn");
    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");
        var blockEditFrame = parent.document.querySelector(
          ".w-edit[data-index='" + idBtn + "']"
        );

        if (blockEditFrame) {
          blockEditFrame.classList.add("active");
          blockEditFrame.parentElement.classList.add("active");

          if (blockEditFrame.classList.contains("js-iframe")) {
            var closeBtnFrame = blockEditFrame.contentDocument.querySelector(".js-bl-modal-close");

            if (closeBtnFrame) {
              closeBtnFrame.addEventListener("click", function(evt) {
                evt.preventDefault();
                blockEditFrame.classList.remove("active");
                blockEditFrame.parentElement.classList.remove("active");
                blockEditFrame.contentDocument.querySelector(".bl-modal").classList.add("active");
              });
            }
          }
        }
      });
    });
  });
})();

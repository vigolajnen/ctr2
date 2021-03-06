(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var navButtons = document.querySelectorAll(".js-btn");
    var closeButtons = document.querySelectorAll(".js-btn-close");
    var wrapper = document.querySelector(".wrapper");

    navButtons.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");

        var blockEdit = document.querySelector(
          ".w-edit[data-index='" + idBtn + "']"
        );

        var blockClose = document.querySelectorAll(".w-close");
        blockClose.forEach(function(item) {
          item.classList.remove("active");
          item.parentElement.classList.remove("active");
        });

        if (blockEdit) {
          blockEdit.classList.add("active");
          blockEdit.parentElement.classList.add("active");
          if (blockEdit && blockEdit.classList.contains("js-iframe")) {
            blockEdit.contentWindow.document
              .querySelector(".bl-modal")
              .classList.add("active");
          }
        }

        if (idBtn == 7) {
          wrapper.classList.add("wrapper-xs");
          wrapper.classList.remove("wrapper-sm");
        } else if (idBtn == 8) {
          wrapper.classList.add("wrapper-sm");
          wrapper.classList.remove("wrapper-xs");
        } else if (idBtn == 9) {
          wrapper.classList.remove("wrapper-xs");
          wrapper.classList.remove("wrapper-sm");
        }
      });
    });

    if (closeButtons) {
      closeButtons.forEach(function(item) {
        item.addEventListener("click", function(evt) {
          evt.preventDefault();
          var parentModal = this.closest(".bl-modal");
          parentModal.classList.toggle("active");
          parentModal.parentElement.classList.remove("active");

          top.document
            .querySelector(".js-iframe[name='code']")
            .parentElement.classList.remove("active");
          top.document
            .querySelector(".js-iframe[name='code']")
            .classList.remove("active");

          top.document
            .querySelector(".js-iframe[data-index='10']")
            .parentElement.classList.remove("active");
          top.document
            .querySelector(".js-iframe[data-index='10']")
            .classList.remove("active");
        });
      });
    }

    var subBtn = document.querySelector(".js-btn-sub");
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
  });

  window.addEventListener("message", function(evt) {
    if (evt.data.target == 1) {
      parent.document
        .querySelector(".bl-modal[data-index='1']")
        .classList.add("active");
      parent.document
        .querySelector(".bl-modal[data-index='1']")
        .parentElement.classList.add("active");
    } else if (evt.data.target == 6) {
      parent.document
        .querySelector(".bl-modal[data-index='6']")
        .classList.add("active");
      parent.document
        .querySelector(".bl-modal[data-index='6']")
        .parentElement.classList.add("active");
    } else if (evt.data.target == 10) {
      top.document
        .querySelector(".js-iframe[data-index='10']")
        .classList.add("active");
      top.document
        .querySelector(".js-iframe[data-index='10']")
        .parentElement.classList.add("active");
      top.document
        .querySelector(".js-iframe[data-index='10']")
        .contentDocument.querySelector(".bl-modal")
        .classList.add("active");
    }
  });

  var btnAddPages = document.querySelectorAll(".tree__icon-add");
  var btnOpenPage = document.querySelector("#btn-newPage");
  if (btnAddPages) {
    btnAddPages.forEach(function(btnAdd) {
      btnAdd.addEventListener('click', function(evt){
        evt.preventDefault();
        console.log("page");

        var closeWindow = document.querySelector(".w-edit[data-index='4']");
        closeWindow.parentElement.classList.remove("active");
        closeWindow.classList.remove("active");

        var openWindow = document.querySelector(".w-edit[data-index='21']");
        openWindow.parentElement.classList.add("active");
        openWindow.classList.add("active");
      })
    });
  }
  if (btnOpenPage) {
    btnOpenPage.addEventListener("click", function(evt) {
      evt.preventDefault();
      console.log("page");

      var closeWindow = document.querySelector(".w-edit[data-index='21']");
      closeWindow.parentElement.classList.remove("active");
      closeWindow.classList.remove("active");

      var openWindow = document.querySelector(".w-edit[data-index='22']");
      openWindow.parentElement.classList.add("active");
      openWindow.classList.add("active");
    });
  }
})();

(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var openIframes = document.querySelectorAll(".js-bl-modal-btn");
    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");
        console.log(idBtn);
        var blClose = document.querySelectorAll(".w-close");
        blClose.forEach(function(bl) {
          bl.classList.remove("active");
        });
        
        var blockEdit = document.querySelector(".w-edit[data-index='" + idBtn + "']");

        if (blockEdit) {
          blockEdit.classList.add('active');
        }
        if (idBtn == 7) {
          document.querySelector(".wrapper").classList.add("container-xs");
          document.querySelector(".wrapper").classList.remove("container-sm");
        } else if (idBtn == 8) {
          document.querySelector(".wrapper").classList.add("container-sm");
          document.querySelector(".wrapper").classList.remove("container-xs");
        } else if (idBtn == 9) {
          document.querySelector(".wrapper").classList.remove("container-xs");
          document.querySelector(".wrapper").classList.remove("container-sm");
        } else if (idBtn == 2) {
          document.querySelector("iframe[name='code']").classList.add("active");

        }  else if (idBtn == 10) {
          document.querySelector("iframe[name='properties']").classList.add("active");
        }
      });
    });
      

    var subBtn = document.querySelector('.js-bl-modal-btn-sub');
  if (subBtn) {
    subBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      document
        .querySelector(".w-edit[data-index='5']")
        .classList.add("active");
    })
  }
  });

  window.addEventListener("message", function (evt) {

    var openIframes = document.querySelectorAll(".js-bl-modal-btn");
    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");
        console.log("asas<br>"+ document.querySelector(".w-edit"));


        parent.document.querySelector(".w-edit[data-index='" + idBtn + "']").classList.add("active");
      });
    });

  });

})();

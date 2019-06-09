(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var openIframes = document.querySelectorAll(".js-bl-modal-btn");
    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-index");
        // console.log(idBtn);
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
          parent.document.querySelector("iframe[name='code']").classList.toggle("active");
          document.querySelector("iframe[name='code']").contentWindow.document.querySelector(".bl-modal").classList.add("active");
        }  else if (idBtn == 10) {
          parent.document.querySelector("iframe[name='properties']").classList.toggle("active");
          parent.document.querySelector("iframe[name='properties']").contentWindow.document.querySelector(".bl-modal").classList.add("active");
        }

      });
    });
  });

  window.addEventListener("message", function (evt) {
    // console.log(evt);
    if (evt.data.target == 6 && evt.data.source == 0) {
      parent.document.querySelector(".bl-modal[data-index='6']").classList.add("active");
    } else if (evt.data.target == 1 && evt.data.source == 0) {
      parent.document.querySelector(".bl-modal[data-index='1']").classList.add("active");
    } else if (evt.data.type == "close" && evt.data.target == 2) {
      parent.document.querySelector("iframe[name='code']").classList.remove("active");
      document.querySelector("iframe[name='code']").contentWindow.document.querySelector(".bl-modal").classList.remove("active");
      
    } else if (evt.data.type == "close" && evt.data.target == 3) {
      parent.document.querySelector("iframe[name='settings']").classList.remove("active");
      document.querySelector("iframe[name='settings']").contentWindow.document.querySelector(".bl-modal").classList.remove("active");
    } else if (evt.data.type == "close" && evt.data.target == 10) {
      parent.document.querySelector("iframe[name='properties']").classList.remove("active");
      document.querySelector("iframe[name='properties']").contentWindow.document.querySelector(".bl-modal").classList.remove("active");
    }
  });
})();

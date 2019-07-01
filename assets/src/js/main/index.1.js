// (function() {
//   document.addEventListener("DOMContentLoaded", function() {
//     var navButtons = document.querySelectorAll(".js-btn");

//     navButtons.forEach(function(btn) {
//       btn.addEventListener("click", function(evt) {
//         evt.preventDefault();
//         var idBtn = this.getAttribute("data-index");
//         console.log(idBtn);

//         var blockEdit = document.querySelector(
//           ".w-edit[data-index='" + idBtn + "']"
//         );

//         if (blockEdit) {
//           blockEdit.classList.add("active");
//           blockEdit.parentElement.classList.add("active");
//         }

//         var blockClose = document.querySelectorAll(".w-close");
//         blockClose.forEach(function(item) {
//           item.classList.remove("active");
//           item.parentElement.classList.remove("active");
//         });

//         if (idBtn == 7) {
//           document.querySelector(".wrapper").classList.add("wrapper-xs");
//           document.querySelector(".wrapper").classList.remove("wrapper-sm");
//         } else if (idBtn == 8) {
//           document.querySelector(".wrapper").classList.add("wrapper-sm");
//           document.querySelector(".wrapper").classList.remove("wrapper-xs");
//         } else if (idBtn == 9) {
//           document.querySelector(".wrapper").classList.remove("wrapper-xs");
//           document.querySelector(".wrapper").classList.remove("wrapper-sm");
//         }
//       });
//     });



//     var closeButtons = document.querySelectorAll(".js-btn-close");
//     closeButtons.forEach(function(item) {
//       item.addEventListener("click", function(e) {
//         var parentModal = this.closest(".bl-modal");

//         parentModal.classList.remove("active");
//         parentModal.parentElement.classList.remove("active");
//       });
//     });

//     var subBtn = document.querySelector(".js-btn-sub");
//     if (subBtn) {
//       subBtn.addEventListener("click", function(evt) {
//         evt.preventDefault();
//         document
//           .querySelector(".w-edit[data-index='5']")
//           .classList.add("active");
//         document
//           .querySelector(".w-edit[data-index='5']")
//           .parentElement.classList.add("active");
//       });
//     }
//   });

//   window.addEventListener("message", function(evt) {
//     if (evt.data.target == 1) {
//       parent.document
//         .querySelector(".bl-modal[data-index='1']")
//         .classList.add("active");
//       parent.document
//         .querySelector(".bl-modal[data-index='1']")
//         .parentElement.classList.add("active");
//     } else if (evt.data.target == 6) {
//       parent.document
//         .querySelector(".bl-modal[data-index='6']")
//         .classList.add("active");
//       parent.document
//         .querySelector(".bl-modal[data-index='6']")
//         .parentElement.classList.add("active");
//     }

//     var openEditBlocks = document.querySelectorAll(".js-btn");
//     openEditBlocks.forEach(function(btn) {
//       btn.addEventListener("click", function(evt) {
//         evt.preventDefault();
//         var idBtn = this.getAttribute("data-index");
//         var blockEditFrame = parent.document.querySelector(
//           ".w-edit[data-index='" + idBtn + "']"
//         );

//         if (blockEditFrame) {
//           blockEditFrame.classList.add("active");
//           blockEditFrame.parentElement.classList.add("active");

//           if (blockEditFrame.classList.contains("js-iframe")) {
//             var closeBtnFrame = blockEditFrame.contentDocument.querySelector(
//               ".js-btn-close"
//             );

//             if (closeBtnFrame) {
//               closeBtnFrame.addEventListener("click", function(evt) {
//                 evt.preventDefault();
//                 blockEditFrame.classList.remove("active");
//                 blockEditFrame.parentElement.classList.remove("active");
//                 blockEditFrame.contentDocument
//                   .querySelector(".bl-modal")
//                   .classList.add("active");
//               });
//             }
//           }
//         }
//       });
//     });
//   });
// })();

(function() {
  var field = document.querySelector(".input-file");
  var str = document.querySelector('[type="file"]').value;
  if (str != "") {
    var arr = str.split("\\");
    arr.splice(-1);
    var last = arr.splice(-1).join();
    console.log(last);
    field.innerHTML = last;
  }

  //   field.innerHTML = "Выбрано файлов: " + document.querySelector('[type="file"]').value[0].files.length;
  // else field.innerHTML = "Выберите файл";
})();

(function() {
  var lang_link = "";

  // Функция осуществляющая логику отображения и работы дерева
  function tree(id, url, open_vetka_arr) {
    var element = document.getElementById(id);

    function hasClass(elem, className) {
      return new RegExp("(^|\\s)" + className + "(\\s|$)").test(elem.className);
    }

    function toggleNode(node) {
      // определить новый класс для узла
      var newClass = hasClass(node, "expand-open")
        ? "expand-closed"
        : "expand-open";
      // заменить текущий класс на newClass
      // регексп находит отдельно стоящий open|close и меняет на newClass
      var re = /(^|\s)(expand-open|expand-closed)(\s|$)/;
      node.className = node.className.replace(re, "$1" + newClass + "$3");
    }

    function load(node) {
      function showLoading(on) {
        var expand = node.getElementsByTagName("DIV")[0];
        expand.className = on ? "expand-loading" : "expand";
      }

      function onSuccess(data) {
        if (!data.errcode) {
          onLoaded(data);
          showLoading(false);
        } else {
          showLoading(false);
          onLoadError(data);
        }
      }

      function onAjaxError(xhr, status) {
        showLoading(false);
        var errinfo = {
          errcode: status
        };
        if (xhr.status != 200) {
          // может быть статус 200, а ошибка
          // из-за некорректного JSON
          errinfo.message = xhr.statusText;
        } else {
          errinfo.message = "Некорректные данные с сервера";
        }
        onLoadError(errinfo);
      }

      // Получаем путь из идентификаторов до текущей ноды
      function get_levels_id(id) {
        var item = document.getElementById(id);
        var levels = id;

        while (
          item.parentNode.parentNode.tagName == "LI" &&
          item.parentNode.parentNode.id != "" &&
          item.parentNode.parentNode != null
        ) {
          parent_id = item.parentNode.parentNode.id;
          levels = parent_id + "/" + levels;
          item = document.getElementById(parent_id);
        }
        return levels;
      }

      // Получение levels (нужно для составления ссылки просмотра каждого узла)
      function get_levels(id) {
        var item = document.getElementById(id);
        var levels = document.getElementById("linkwatch_" + id).value;
        return levels;
      }

      function onLoaded(data) {
        var levels = get_levels(node.id);
        var levels_id = get_levels_id(node.id);

        for (var i = 0; i < data.length; i++) {
          var child = data[i];

          var li = document.createElement("LI");
          li.id = child.id;
          var is_module = "";
          if (child.module != "")
            is_module =
              '<img id="module_img_' +
              child.id +
              '" src="/cms/img/module_str_icon.gif">';

          li.className =
            "Node expand" + (parseInt(child.isFolder) ? "Closed" : "Leaf");
          if (i == data.length - 1) li.className += " IsLast";

          var title_text = child.title;
          if (child.hidden == "1")
            title_text = '<span style="color: gray">' + title_text + "</span>";

          var str = "";
          str += '		<div id="a' + child.id + '">';
          str +=
            '                  <input id="linkwatch_' +
            child.id +
            '" type="hidden" value="' +
            levels +
            child.link_watch +
            '">';

          // Низя перемещать "служебные" и каталог
          if (
            levels.indexOf("/s/") == -1 &&
            levels != "/s" &&
            child.module != "catalog"
          ) {
            str +=
              '                  <img  id="move_' +
              child.id +
              '" src="/cms/img/icon-move.gif" border="0">';
          }

          str +=
            "		  <a onclick=\"pages_load_click(0,'" +
            child.id +
            '\');return false;" href="#" class="btn"><svg class="tree__icon-add" width="15" height="15"><use xlink:href="img/sprite.svg#icon-t-add-1"></use></svg></a>&nbsp;';
          if (child.module != "catalog") {
            // Низя удалять "служебные"
            if (levels.indexOf("/s/") == -1 && levels != "/s") {
              str +=
                '<a href="#" class="btn" onclick="if (confirm(\'Вы действительно хотите удалить страницу &laquo;' +
                child.title.replace("'", "\\'") +
                "&raquo;?')) { f=document.getElementById('del'); f.id.value='" +
                child.id +
                '\'; f.submit(); };return false;"><svg class="tree__icon-del" width="24" height="19"><use xlink:href="img/sprite.svg#icon-t-del"></use></svg></a>';
            }
          } // (child.module != 'catalog')

          str +=
            '&nbsp;&nbsp;<a href="#" alt="' +
            child.id +
            '" title="' +
            child.id +
            '" id="title_menu_' +
            child.id +
            '"  onclick="pages_load_click(\'' +
            child.id +
            "',''); return false;\">" +
            title_text +
            "</a> ";
          str += is_module;
          str += "		</div>";

          li.innerHTML =
            '<div class="expand"></div><div class="tree__inner">' + str + "</div>";
          if (parseInt(child.isFolder)) {
            li.innerHTML += '<ul class="tree__list"></ul>';
          }

          var img = document.createElement("IMG");
          img.id = "line_bg_" + child.id;
          img.src = "/cms/img/images/line_bg_over.gif";
          img.style.display = "none";
          var ul = node.getElementsByTagName("UL")[0];
          ul.appendChild(img);
          ul.appendChild(li);

          // Низя перемещать "служебные" и каталог
          if (
            levels.indexOf("/s/") == -1 &&
            levels != "/s" &&
            child.module != "catalog"
          ) {
            new DragObject(document.getElementById("move_" + child.id));
            new DropTarget(document.getElementById("a" + child.id));
          }

          // Инициализация для копирования ссылки в буфер
          //init_clip();
        }

        node.isLoaded = true;
        toggleNode(node);

        if (
          open_vetka_arr != undefined &&
          open_vetka_arr != null &&
          open_vetka_arr.length >= 2
        ) {
          open_vetka_arr.splice(0, 1);
          load(document.getElementById(open_vetka_arr[0]));
        }
      }

      function onLoadError(error) {
        var msg = "Ошибка " + error.errcode;
        if (error.message) msg = msg + " :" + error.message;
        alert(msg);
      }

      showLoading(true);

      $.ajax({
        url: url,
        data: "act=show_data&id=" + node.id,
        dataType: "json",
        success: onSuccess,
        error: onAjaxError,
        cache: false
      });
    }

    this.load = function(node) {
      load(node);
    };

    element.onclick = function(event) {
      event = event || window.event;
      var clickedElem = event.target || event.srcElement;

      if (!hasClass(clickedElem, "expand")) {
        return; // клик не там
      }

      // Node, на который кликнули
      var node = clickedElem.parentNode;
      if (hasClass(node, "expand-leaf")) {
        return; // клик на листе
      }

      if (node.isLoaded || node.getElementsByTagName("LI").length) {
        // Узел уже загружен через AJAX(возможно он пуст)
        toggleNode(node);
        return;
      }

      if (node.getElementsByTagName("LI").length) {
        // Узел не был загружен при помощи AJAX, но у него почему-то есть потомки
        // Например, эти узлы были в DOM дерева до вызова tree()
        // Как правило, это "структурные" узлы
        // ничего подгружать не надо
        toggleNode(node);
        return;
      }

      // загрузить узел
      load(node);
    };
  }

  // Прячет/показывает значки с операциями над нодой
  var showhide_flag1 = false;
  var showhide_flag2 = false;

  function Structure_showhide(id) {
    var element = document.getElementById(id);
    element.style.marginLeft = "-4px";
    if (showhide_flag1 == false && showhide_flag2 == false) {
      element.style.visibility = "hidden";
    } else {
      element.style.visibility = "visible";
    }
  }

  if (typeof createXMLHttpRequestObject != "function") {
    function createXMLHttpRequestObject() {
      var ro;
      var browser = navigator.appName;
      if (browser == "Microsoft Internet Explorer") {
        var ro = new ActiveXObject("Microsoft.XMLHTTP");
      } else {
        var ro = new XMLHttpRequest();
      }
      return ro;
    }
  }

  // AJAX по поводу перетаскивания элемента дерева
  function sendRequest_move_element(targetURL) {
    var http = createXMLHttpRequestObject();
    http.open("get", targetURL);
    http.onreadystatechange = function() {
      if (http.readyState == 4) {
        // alert(http.responseText);
      }
    };
    http.send(null);
  }

  /*
  function init_clip() {
      // Инициализация библиотеки копирования в буфер
      ZeroClipboard.setMoviePath('/cms/js/ZeroClipboard.swf');

      // assign a common mouseover function for all elements using jQuery
      $('a.multiple').mouseover(function() {
          clip = new ZeroClipboard.Client();
          clip.setHandCursor(true);

          // set the clip text to our innerHTML
          clip.setText(document.getElementById(this.id.replace('copy_button_', 'linkwatch_')).value);
          clip.glue(this, document.getElementById(this.id.replace('copy_button_', 'line')));

          // gotta force these events due to the Flash movie
          // moving all around.  This insures the CSS effects
          // are properly updated.
          clip.receiveEvent('mouseover', null);
      });
  }

  var clip = null;
  */

  $(document).ready(function() {
    var open_vetka_arr = Array();
    var open_vetka = document.getElementById("open_vetka").value;
    if (open_vetka != "") open_vetka_arr = open_vetka.split("/");

    var struct_tree = new tree(
      "tree",
      "/cms/request_structure.php",
      open_vetka_arr
    );
    //init_clip();

    if (open_vetka_arr.length != 0) {
      struct_tree.load(document.getElementById(open_vetka_arr[0]));
    }

    // Проходимся по дереву и запрещаем перемещать отдельные эелементы
    var linkwatch_arr = document.getElementsByName("linkwatch");
    for (var i = 0; i < linkwatch_arr.length; i++) {
      var id = linkwatch_arr[i].id.replace("linkwatch_", "");
      var link_watch = linkwatch_arr[i].value;

      // Низя перетягивать служебные
      if (link_watch.indexOf("/s/") == -1 && link_watch != "/s") {
        new DragObject(document.getElementById("move_" + id));
        new DropTarget(document.getElementById("a" + id));
      } else {
        // Прячем перемещение
        document.getElementById("move_" + id).style.display = "none";
      }
    }
  });
})();

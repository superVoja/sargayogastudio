//Scroll effect
// (function($) {
//   $.fn.visible = function(partial) {
//     var $t = $(this),
//       $w = $(window),
//       viewTop = $w.scrollTop(),
//       viewBottom = viewTop + $w.height(),
//       _top = $t.offset().top,
//       _bottom = _top + $t.height(),
//       compareTop = partial === true ? _bottom : _top,
//       compareBottom = partial === true ? _top : _bottom;

//     return compareBottom <= viewBottom && compareTop >= viewTop;
//   };
// })(jQuery);

// var win = $(window);

// var allMods = $(".withEffect");

// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });

// win.scroll(function(event) {
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });
// });

//Image preview model
window.onload = function() {
  var imgArr = document.getElementsByClassName("myImg");

  var modalWindow = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var caption = document.getElementById("caption");
  var span = document.getElementById("close");
  var modalBlock = document.getElementById("modalBlock");

  for (i = 0; i < imgArr.length; i++) {
    var picture = imgArr[i];
    picture.onclick = function() {
      openImg(this);
    };
  }

  function openImg(pic) {
    modalWindow.style.display = "block";
    modalBlock.style.transform = "translateY(0%)";
    modalImg.src = pic.src;
    modalImg.alt = pic.alt;
    caption.innerHTML = modalImg.alt;
  }

  function close() {
    modalWindow.style.display = "none";
  }

  window.addEventListener("click", function(event) {
    if (event.target == modalBlock) {
      modalBlock.style.transform = "translateY(-500%)";
      setTimeout(close, 500);
    }
  });

  span.onclick = function() {
    modalBlock.style.transform = "translateY(-500%)";
    setTimeout(close, 500);
  };
};

//Back to top button
var btn = $("#button");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

//Image preview model
window.onload = function() {
  var imgArr = document.getElementsByClassName("myImg");

  var modalWindow = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var caption = document.getElementById("caption");
  var span = document.getElementById("close");
  var modalBlock = document.getElementById("modalBlock");
  var next = document.getElementById("next");
  var prev = document.getElementById("prev");
  var slideIndex = "";

  for (i = 0; i < imgArr.length; i++) {
    var picture = imgArr[i];
    var list = Array.from(imgArr);
    picture.onclick = function() {
      var index = list.indexOf(this);

      slideIndex = index;
      openImg(imgArr[index]);
    };
  }

  next.addEventListener("click", function(event) {
    if (slideIndex >= list.length - 1) {
      event.preventDefault();
    } else {
      openImg(imgArr[(slideIndex += 1)]);
    }
  });

  prev.addEventListener("click", function(event) {
    if (slideIndex < 1) {
      event.preventDefault();
    } else {
      openImg(imgArr[(slideIndex -= 1)]);
    }
  });

  function openImg(pic) {
    modalWindow.style.display = "block";
    modalBlock.style.transform = "translateY(0%)";
    modalImg.src = pic.src;
    modalImg.alt = pic.alt;
    caption.innerHTML = modalImg.alt;

    bodyScrollLock.disableBodyScroll(myModal);
  }

  function close() {
    modalWindow.style.display = "none";
    bodyScrollLock.enableBodyScroll(myModal);
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
    bodyScrollLock.enableBodyScroll(myModal);
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

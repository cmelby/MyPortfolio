//Toast new users viewing my portfolio......
M.toast({html: 'Thanks for checking out my portfolio!', classes: 'rounded'});

//Scroll animated profile links...............................................
  var isScrolling = false;
 
  

  function throttleScroll(e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }

  document.addEventListener("DOMContentLoaded", scrolling, false);

  var listItems = document.querySelectorAll("#profile-links ul li");

  function scrolling(e) {

    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];

      if (isPartiallyVisible(listItem)) {
        listItem.classList.add("active");
      } else {
        listItem.classList.remove("active");
      }
    }
  }

  function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
  }

  function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
  }

  window.addEventListener("scroll", throttleScroll, false);

  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

  
 
//Calling all functions on page laod.....
M.AutoInit();
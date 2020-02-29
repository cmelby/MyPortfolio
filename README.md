# Portfolio

## Summary 
This portfolio houses samples of work that I have created and can be used to gain insight into my skills and knowledge. You can find links to demo the different pieces along with their respective repository in GitHub, as well as links to my LinkedIn and personal GitHub profile. You will also be able to find out a little about me in the about me tab at the bottom along with a list of skills I have developed.

## Technologies Used
- Materialize CSS - Used to pull existing html and CSS for creating responsive organizational structer and styling for the site. In addtion, pulling from their JS library's built in scripts to utilize plugins for animations.
- jQuery - Used for event listeners of parent and childeren elements as well as to store and recall those varible in local      storage to be displayed dynamically in HTML on the page.
- momentjs - Used to pull current date for the current city.
- javascript - Used to dynamically change html and store user-input.
- HTML - Used to create elements on the DOM
- CSS - Styles html elements on page
- Git - Version control system to track changes to source code
- GitHub - Hosts repository that can be deployed to GitHub Pages
 


## Animating Elements Using JavaScript

One of my favortie things about developing is the endless options avalible. For this simple portfolio I used materialized CSS. They also provide a JavaScript library to pull from for certian components. However, more often that not with any of the front end frameworks its only a starting point and in themselves are limiting. But, building upon that framework and pulling from the endless creativity that JavaScript provides people can create better applications across the board, and fatser. Below is a snippet of JavaScript I built in order to add some animation to my personal profile links. This peice of code activates my links form an inactive state, to an active on and works with the CSS to transition them on the screen when the users window reaches certian depths.


```js
//Scroll animated profile links.....................................................................
  var isScrolling = false;
 
  window.addEventListener("scroll", throttleScroll, false);

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

```

## Built With

* [Materialize CSS](http://archives.materializecss.com/0.100.2/about.html)
* [jQuery](https://api.jquery.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Boostrap](https://getbootstrap.com/)

## Authors

**Chris Melby**
- [LinkedIn](https://www.linkedin.com/in/chris-melby-71106b126/)
- [Link to Github](https://github.com/cmelby)
- [Portfolio](https://cmelby.github.io/portfolio/)

## Featured projects

Dinner Party Project
- [Link to Project](https://github.com/kokevin678/project1)

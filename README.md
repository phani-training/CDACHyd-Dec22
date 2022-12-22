# CDACHyd-Dec22- Training on Web Technologies.
## Topics:
- jQuery
- JSON
- Nodejs
- ExpressJs
- ReactJs
## Day 1
### What is jQuery?
1. jQuery is a library of JS used to perform DOM manipulations in very quick manner. It allows to "write less and get More". With jQuery, we have APis that can allow you to perform complex UI related operations in a simple and effective Code
2. jQuery is a single JS file that can be downloaded and consumed like any other JS file in ur html document. Its APIs can eb used to develop rich UIs for the Web Apps with animations, DOM features and many more. jQuery is actually JS only. Here U will have ready to use functions which are called to perform UR desired results. U can download the minified version of the JS file to UR local directory.
3. It is accessible from the following location:
    https://code.jquery.com/jquery-3.6.2.min.js
4. There are multiple files related to each version of the jquery, one is the production minified version and other development version. If U R extending the JS file, U could do so using the Development version. For consuming the APIs, U should use the production minified version. The minified version will be a smaller file with no white spaces and very much minified(the variable names, function names will all be very small).
5. In real time productions, we dont download the file, rather refer a CDN version of it. (Content Delivery Network) CDN is a cloud based repositories that contain common libraries across the globe. These will be maintained by trustable organizations like google, Microsoft, JQuery itself and many more. In this case, U actually dont have a physical file, but a link to the location of the file.
6. Once the lib is referenced in the HTML document, U can use the APis. 

### document.ready
- This is an event triggered when the HTML document is loaded into the browser. It is similar to the Window.load event of the HTML DOM. 
- Every jQuery object is represented by a $ or jQuery. The jQuery object has APIs to be called for achieving UR Requirement.
- The jQuery object takes a selector as an argument. This could be the document, an Html Tag, a CSS class or an Id of an element of the html document. After selecting the DOM element, U have APIs to handle the events of the element. U can also access the attributes of the selected element and perform the changes required.
### Selectors:
- $("a") ->Refers to all the a Tags of the Document
- $("a:first") ->Filter to refer only the 1st Tag of the Document.
- $("a:last") ->Filter to refer only the last Tag of the Document.

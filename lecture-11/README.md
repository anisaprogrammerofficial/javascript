# lecture-11 DOM Part - 5


in this lecture we have studied about DOM traservering, 

## 1. Objective of the Lesson
By the end of this session, students will be able to:
Understand what DOM traversal is.
Use properties like parentNode, childNodes, firstChild, lastChild, nextSibling, and previousSibling to navigate the DOM tree.
Differentiate between childNodes and children.
Write JavaScript to traverse and manipulate DOM elements dynamically.
## 2. Introduction (5 minutes)
What is DOM Traversal?
Explain:
"Traversing the DOM means navigating through the DOM tree to access elements, their parents, siblings, and children."
Use a visual diagram of a DOM tree:
```html 
<html>
  <body>
    <div id="parent">
      <p id="child1">First Paragraph</p>
      <p id="child2">Second Paragraph</p>
    </div>
  </body>
</html>
```
Highlight relationships:
#parent is the parent of #child1 and #child2.
#child1 and #child2 are siblings.
Real-World Analogy
"Think of the DOM tree like a family tree: parents, children, and siblings. Traversing means navigating between these family members."

## 3. Why is DOM Traversal Important? (5 minutes)
Use examples to show practical use cases:
Accessing and modifying content dynamically.
Creating interactive user interfaces.
Handling events on related elements.
#### Example:
Imagine clicking on a button, and you need to hide its parent or change the text of its sibling. DOM traversal makes this possible.

## 4. Key Traversal Properties (15 minutes)
Parent and Ancestors
parentNode: Get the parent of an element.
```js
const child = document.getElementById("child1");
console.log(child.parentNode); // Logs the <div> element
```
Children
childNodes: Returns all child nodes (including text nodes).
children: Returns only element nodes (ignores text nodes).
Example:
```js
const parent = document.getElementById("parent");
console.log(parent.childNodes); // Logs NodeList with text nodes and elements
console.log(parent.children);   // Logs HTMLCollection with only <p> elements
```
First and Last Child
firstChild: Access the first child (including text nodes).
firstElementChild: Access the first element child.
lastChild and lastElementChild: Similar for the last child.
Example:
```js
const parent = document.getElementById("parent");
console.log(parent.firstChild);          // Logs the first child (text or element)
console.log(parent.firstElementChild);  // Logs the first <p> element
```
Siblings
nextSibling and previousSibling: Navigate to adjacent nodes (including text nodes).
nextElementSibling and previousElementSibling: Navigate to adjacent element nodes.
Example:
```js
const child = document.getElementById("child1");
console.log(child.nextSibling);          // Logs the next sibling (text or element)
console.log(child.nextElementSibling);  // Logs the next <p> element
```
### 5. Hands-On Activity (15 minutes)
Activity 1: Inspect Relationships
Provide students with this HTML and let them explore parent-child relationships:
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="container">
      <h1>Title</h1>
      <p>First Paragraph</p>
      <p>Second Paragraph</p>
    </div>
    <script>
      // Add traversal code here for testing
    </script>
  </body>
</html>
```
### TODO:

Find the parent of the ```<h1>``` tag.
Find the first child of #container.
Find the sibling of the first ```<p>```.
Activity 2: Modify Relationships
Provide this HTML:
```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <button id="btn">Highlight Next</button>
    <script>
      let current = document.getElementById("list").firstElementChild;
      document.getElementById("btn").addEventListener("click", function () {
        if (current) {
          current.style.color = "red";
          current = current.nextElementSibling; // Move to the next sibling
        }
      });
    </script>
  </body>
</html>
```

Understand the provided script.
Extend it to highlight previous siblings when another button is clicked.
### 6. Common Mistakes and Debugging Tips (5 minutes)
Accessing text nodes instead of element nodes (use firstElementChild instead of firstChild).
Modifying a node that doesn’t exist (check if the node is null before accessing properties).

### 7. Quiz and Wrap-Up (10 minutes)
Quick Quiz
What is the difference between childNodes and children?
How do you find the parent of an element?
How do you navigate to the next sibling element?

Challenge

```html
<div>
  <h2>Heading</h2>
  <p>Paragraph</p>
</div>
```
Write JavaScript to:
Log the parent of ```<h2>```.
Log the sibling of ``` <h2>```.
Recap Key Points
The DOM is a tree-like structure that we can traverse using properties like parentNode, childNodes, firstChild, nextSibling, etc.
Traversing is useful for dynamic content manipulation.

### 8. TODO:
create a basic interactive webpage where they:

Traverse the DOM to highlight a specific element.
Dynamically modify the text of siblings or parents.
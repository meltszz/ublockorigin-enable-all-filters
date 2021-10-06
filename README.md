# uBlock Origin enable all filters
### ![a](https://i.imgur.com/LYQy6cQ.gif) Enable all uBlock Origin's filters with a single line of code! ![a](https://i.imgur.com/LYQy6cQ.gif)
![How to run the line of code](https://i.imgur.com/MOmkNRU.gif)

### Options
```
// Check all filters
document.querySelectorAll("input[type=checkbox]").forEach(e=>{"importLists"!=e.id&&(e.checked=!0)});
```
> or
```
// Check all filters and apply them
document.querySelectorAll("input[type=checkbox]").forEach(e=>{"importLists"!=e.id&&(e.checked=!0)});
document.getElementById("buttonApply").click();
document.getElementById("buttonPurgeAll").click();
document.getElementById("buttonUpdate").click();
```

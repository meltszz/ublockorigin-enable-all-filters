// Open up uBlock Origin dashboard and select the "Filter List" tab, then, open browser dev tools paste the following code at the console:
document.querySelectorAll("input[type=checkbox]").forEach(e=>{"importLists"!=e.id&&(e.checked=!0)});

// Automatically applies the filters (optional)
document.getElementById("buttonApply").click();
document.getElementById("buttonPurgeAll").click();
document.getElementById("buttonUpdate").click();

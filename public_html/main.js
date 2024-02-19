document.getElementById("collapseLeftMenuButton").addEventListener("click", function() {
    let leftMenu = document.getElementById("leftMenu");
    leftMenu.classList.toggle("active");
});

document.getElementById("collapseRightMenuButton").addEventListener("click", function() {
    let rightMenu = document.getElementById("rightMenu");
    rightMenu.classList.toggle("active");
});

document.getElementById("newPostButton").addEventListener("click", function() {
    let rightMenu = document.getElementById("rightMenu");
    rightMenu.classList.toggle("active");
});
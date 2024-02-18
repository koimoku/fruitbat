document.getElementById("collapseMenuButton").addEventListener("click", function() {
    let leftSideBar = document.getElementById("leftSideBar");
    let postButtonContainer = document.getElementById("postButtonContainer");

    leftSideBar.classList.toggle("active");
    postButtonContainer.classList.toggle("active");
});
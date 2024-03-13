const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".side-bar");
const container = document.querySelector(".container")

menuIcon.onclick = function(){
    sidebar.classList.toggle("barside")
    container.classList.toggle("large-container")
}
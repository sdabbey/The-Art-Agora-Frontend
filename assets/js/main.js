const mainOverlay = document.getElementById("main-overlay")

//Sidebar trigger
const navTrigger = document.getElementById("nav-trigger")
const sideMenu = document.getElementById("menu-content")
const closeBtn = document.getElementById("nav-closer")

navTrigger.addEventListener("click", () => {
    sideMenu.classList.add("active")
    mainOverlay.classList.add("side-actions-active")
})

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active")
    mainOverlay.classList.remove("side-actions-active")
})


//Search trigger
const searchTrigger = document.getElementById("search-trigger")
const searchInput = document.getElementById("search-input")
const searchCloser = document.getElementById("search-closer")

searchTrigger.addEventListener("click", () => {

    searchInput.classList.add("active")
})

searchCloser.addEventListener("click", () => {
    searchInput.classList.remove("active")
})
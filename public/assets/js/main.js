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


//Send Mail
document.getElementById('subscribe-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/api/send_email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        alert(result.message);

    } catch (error) {
        console.error('Error:', error);
        alert('There was a problem with the signup. Please try again later.');
    }
});
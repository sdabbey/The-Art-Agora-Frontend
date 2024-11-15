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

document.getElementById('popup-closer').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    startMusic();
});
function startMusic() {
document.getElementById('start-button').style.display = 'none'; // Hide the start button
playMusic(); // Start playing music
}
const image = document.getElementById('cover'),
title = document.getElementById('music-title'),
artist = document.getElementById('music-artist'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next'),
playBtn = document.getElementById('play');

const music = new Audio();
// Enable autoplay

const songs = [
{
    path: 'assets/audio/Juzz.m4a',
    displayName: 'TheAA - Jazz',
    cover: 'assets/images/hoodie.png',
    artist: 'The Art Agora',
},
// Additional songs can be added here
];

let musicIndex = 0;
let isPlaying = false;


music.autoplay = true;  

function togglePlay() {
if (isPlaying) {
    pauseMusic();
} else {
    playMusic();
}
}

function playMusic() {
isPlaying = true;
playBtn.classList.replace('bx-play', 'bx-pause');
playBtn.setAttribute('title', 'Pause');
music.play();
}

function pauseMusic() {
isPlaying = false;
playBtn.classList.replace('bx-pause', 'bx-play');
playBtn.setAttribute('title', 'Play');
music.pause();
}

function loadMusic(song) {
music.src = song.path;
title.textContent = song.displayName;
artist.textContent = song.artist;
image.src = song.cover;

}

function changeMusic(direction) {
musicIndex = (musicIndex + direction + songs.length) % songs.length;
loadMusic(songs[musicIndex]);
playMusic();
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));

// Load and play music on page load
loadMusic(songs[musicIndex]);
playMusic(); // Start playing immediately

async function attemptPlay() {
try {
    await playMusic(); // Try to play music
} catch (error) {
    console.warn('Autoplay was blocked. Prompting user to start.');
    // Show a message or button to ask the user to click to start music
    document.getElementById('start-button').style.display = 'flex';
}
}

// Call this on page load
loadMusic(songs[musicIndex]);
attemptPlay();


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
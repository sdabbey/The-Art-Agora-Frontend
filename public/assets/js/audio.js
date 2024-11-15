const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play')


const music = new Audio();

const songs = [
    {
        path: 'assets/Juzz.m4a',
        displayName: 'TheAA - Jazz',
        cover: 'assets/images/hoodie.png',
        artist: 'The Art Agora',
    },
    // {
    //     path: 'assets/Juzz.m4a',
    //     displayName: 'TheAA - Jazz',
    //     cover: 'assets/1.jpg',
    //     artist: 'The Art Agora',
    // },
    // {
    //     path: 'assets/Juzz.m4a',
    //     displayName: 'TheAA - Jazz',
    //     cover: 'assets/1.jpg',
    //     artist: 'The Art Agora',
    // }
];

let musicIndex = 0;
let isPlaying = false;

music.play()

function togglePlay() {
   
    if (isPlaying) {
        pauseMusic();
    } else {
      
        playMusic();
    }
}

function playMusic() {
   
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('bx-play', 'bx-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('bx-pause', 'bx-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}





playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));


loadMusic(songs[musicIndex]);
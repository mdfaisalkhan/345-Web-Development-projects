// === DOM SELECTORS ===
const ad = document.querySelector('.song');
const art_name = document.querySelector('#name');
const playButton = document.querySelector('#playButton');
const playingIcon = playButton.querySelector('.fa-play');
const pauseIcon = playButton.querySelector('.fa-pause');
const titleText = document.querySelector('#songtitle'); 
const artistImg = document.querySelector('#artist');
const startTime = document.querySelector('#start');
const endTime = document.querySelector('#end');
const progressBar = document.querySelector('.line');
const progress = document.querySelector('.lineChild');

const artist_name_list = 
[
    'PUBG',
    'Abeer Nehme',
    'Nusrat Fateh Ali Khan',
    'Valorant',
    'Papon',
];
const artist_title_list = 
[
    'My Heart Full of Flames',
    'Bi sarah',
    'Sason Ki Mala',
    '2WORLD',
    'Bulleya',
];
const artist_img_list = 
[
    'image/ar1.jpg',
    'image/ar2.jpg',
    'image/ar3.jpg',
    'image/ar4.jpg',
    'image/ar5.jpg',

];
const song_list = 
[
    'songs/s1.mp3',
    'songs/s2.mp3',
    'songs/s3.mp3',
    'songs/2World.mp3',
    'songs/Bulleya.mp3',
];


let x = 0;

function loadSong(index) {
    ad.src = song_list[index];
    art_name.textContent = artist_name_list[index];
    titleText.textContent = artist_title_list[index];
    artistImg.src = artist_img_list[index];
    ad.load();

    
    titleText.classList.remove('run');
    artistImg.classList.remove('round');
    playingIcon.classList.remove('none');
    pauseIcon.classList.add('none');
}


function togglePlayPause() {
    if (ad.paused || ad.ended) {
        ad.play();
        titleText.classList.add('run');
        artistImg.classList.add('round');
        playingIcon.classList.add('none');
        pauseIcon.classList.remove('none');
    }
    
    else {
        ad.pause();
        titleText.classList.remove('run');
        artistImg.classList.remove('round');
        playingIcon.classList.remove('none');
        pauseIcon.classList.add('none');
    }
    
    
}

function backward() {
    x = (x - 1 + artist_name_list.length) % artist_name_list.length;
    loadSong(x);
}

function forward() {
    x = (x + 1) % artist_name_list.length;
    loadSong(x);
}

function removeEffect() {
    ad.pause();
    titleText.classList.remove('run');
    artistImg.classList.remove('round');
    playingIcon.classList.remove('none');
    pauseIcon.classList.add('none');
}

function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}

function updateProgress() {
    if (ad.duration) {
        const percent = (ad.currentTime / ad.duration) * 100;
        progress.style.width = `${percent}%`;

        startTime.textContent = formatTime(ad.currentTime);
        endTime.textContent = formatTime(ad.duration);
    }
}

ad.addEventListener('loadedmetadata', () => {
    endTime.textContent = formatTime(ad.duration);
});


progressBar.addEventListener('click', function(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = ad.duration;

    ad.currentTime = (clickX / width) * duration;
});

playButton.addEventListener('click', togglePlayPause);
document.querySelector('.fa-forward-step').addEventListener('click', forward);
document.querySelector('.fa-backward-step').addEventListener('click', backward);

ad.addEventListener('ended', () => {
    removeEffect();
    forward();
});

ad.addEventListener('timeupdate', updateProgress);

loadSong(x);

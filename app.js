const container = document.querySelector('.container') 
const title = document.querySelector('.title')
const cover = document.querySelector('.cover')
const progressContainer = document.querySelector('.progress-container')
const progress = document.getElementById('progress')
const prevBtn = document.querySelector('.prev')
const playBtn = document.querySelector('.play')
const nextBtn = document.querySelector('.next')
const audio = document.querySelector('.audio')

const songs = [
    'Ending - Isak Danielson',
    'Heather - Conan Gray',
    'Osmonlarda - Xamdam Sobirov',
    'U okna - HammAli & Navai',
    'XXXTENTACION - SAD_',
    // 'Xcho - Вороны',
]

let songIndex = 0

playSong(songs[songIndex])

function playSong(song) {
    title.textContent = song
    audio.src = `./mus/${song}.mp3`
    cover.src = `./album/${song}.jpg`
}

//function


//PLAY MUSIC
function playMusic() {
    const isPlay = container.classList.contains('play')

    if(isPlay){
        pause()
    }else{
        play()
    }
}

function play(){
    container.classList.add('play')
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    audio.play()
}
function pause() {
    container.classList.remove('play')
    playBtn.innerHTML = `<i class="fas fa-play"></i>`
    audio.pause()
}

// CHANGER THE MUSIC
function next(){
    songIndex++
    if(songIndex > songs.length - 1){
        songIndex = 0
    }
    playSong(songs[songIndex])
    play()
}

function prev(){
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1
    }
    playSong(songs[songIndex])
    play()
}

function updateProgress(e){
    const {duration , currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

// PROGREE CHANGER
//     function progres(e) {
//         const duration = e.srcElement.duration
//         // const curTime = e.srcElement.currentTime
//         const curTime = e.srcElement.currentTime
//         const persantageWidth = (curTime / duration) * 100
//         progres.style.width = `${persantageWidth}%`
        


//         // end time
//         const endMinutes =  Math.floor(duration / 60)
//         const endSeconds = Math.floor(duration % 60)
//         console.log(endMinutes , endSeconds)
//         }
// // set progress

// function setProgress (e) {
//     const width = this.clientWidth
//     const widthX = e.offsetX
//     const duration = audio.duration   
//     // audio.currentTime = (widthX / width) * duration
//     end.textContent = `${endMinutes}:${endSeconds = endSeconds }`< 10 ? '0' + endSeconds`



// EVENTS
playBtn.addEventListener('click' , playMusic)
nextBtn.addEventListener('click' , next)
prevBtn.addEventListener('click' ,  prev)
// audio.addEventListener('timeupdate', progress)
audio.addEventListener('timeupdate', updateProgress)

audio.addEventListener('ended', next)
// progressContainer.addEventListener('click', setProgress)
progressContainer.addEventListener('click',setProgress);



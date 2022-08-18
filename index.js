/* note: recommended browser chrome or edge */
console.log("recommended browser chrome or edge")
/*array with customized content for easy access*/
const sound = ["clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "ride.wav", "snare.wav", "tink.wav", "tom.wav"]
const color = ["#D9ED92", "#B5E48C", "#99D98C", "#76C893", "#52B69A", "#34A0A4", "#168AAD", "#1A759F"]
const text = ["Clap", "Hi Hat", "Kick", "Open Hat", "Ride", "Snare", "Tink", "Tom"]
/*pulling html elements*/
const btn = document.querySelectorAll(".audio-btn")
const body = document.body
const textContainer = document.querySelector("#text")
/*keybindings setup towards audioMap index*/
const binds = {
   "a": 0,
   "s": 1,
   "d": 2,
   "f": 3,
   "h": 4,
   "j": 5,
   "k": 6,
   "l": 7,
}
/*pulls from sound array into new audioMap array and preloads them*/
let audioMap = sound.map((e) =>{
   return new Audio(e)
})
/*listens for specific keypresses using binds*/
body.addEventListener("keydown", function(e){
    if (binds[e.key] >= 0) {
        modifyAndPlay(binds[e.key])
    } else {
        textContainer.textContent = "Press the correct buttons!!!!!!!!!!!!!!"
    }
})
/* assigns name to each button from the sound array and removes the file extension */
btn.forEach((e, i) => {
    e.textContent = sound[i].replace(".wav", "").toUpperCase()
    e.addEventListener("click", function(){
        modifyAndPlay(i)
    })
})
/* function that handles playing sound, changing color on body, text and removing/adding active class on each button */
function modifyAndPlay(e) {
    btn.forEach((e) => {
        if (e.classList.contains("active")) {
            e.classList.remove("active")
        }
    })
    audioMap[e].pause()
    audioMap[e].currentTime = 0
    audioMap[e].play()
    body.style.background = color[e]
    textContainer.textContent = text[e]
    btn[e].classList.add("active")
}
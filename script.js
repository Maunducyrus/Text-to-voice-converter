let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
voices = window.speechSynthesis.getVoices();//provided all voices available in the device
speech.voice = voices[0]; // the fast voice starts as an array 0

voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
};

voiceSelect.addEventListener("change", () => {//changing events in the dropdown
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
speech.text = document.querySelector("textarea").value;
window.speechSynthesis.speak(speech);
});
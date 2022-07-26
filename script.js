const pianoSounds = {
  "261-C.mp3": new Audio(`mp3/261-C.mp3`),
  "261-C.mp3": new Audio(`mp3/261-C.mp3`),
  "277-C-sharp.mp3": new Audio(`mp3/277-C-sharp.mp3`),
  "293-D.mp3": new Audio(`mp3/293-D.mp3`),
  "311-D-sharp.mp3": new Audio(`mp3/311-D-sharp.mp3`),
  "329-E.mp3": new Audio(`mp3/329-E.mp3`),
  "349-F.mp3": new Audio(`mp3/349-F.mp3`),
  "369F-sharp.mp3": new Audio(`mp3/369F-sharp.mp3`),
  "391-G.mp3": new Audio(`mp3/391-G.mp3`),
  "415-G-sharp.mp3": new Audio(`mp3/415-G-sharp.mp3`),
  "440-A.mp3": new Audio(`mp3/440-A.mp3`),
  "466-A-sharp.mp3": new Audio(`mp3/466-A-sharp.mp3`),
  "495-B.mp3": new Audio(`mp3/495-B.mp3`),
  "523-C.mp3": new Audio(`mp3/523-C.mp3`),
  "545-C-sharp.mp3": new Audio(`mp3/545-C-sharp.mp3`),
  "587-D.mp3": new Audio(`mp3/587-D.mp3`),
  "622-D-sharp.mp3": new Audio(`mp3/622-D-sharp.mp3`),
  "659-E.mp3": new Audio(`mp3/659-E.mp3`),
  "698-F.mp3": new Audio(`mp3/698-F.mp3`),
  "698-F-sharp.mp3": new Audio(`mp3/698-F-sharp.mp3`),
  "783-G.mp3": new Audio(`mp3/783-G.mp3`),
  "830-G-sharp.mp3": new Audio(`mp3/830-G-sharp.mp3`),
  "880-A.mp3": new Audio(`mp3/880-A.mp3`),
  "932-A-sharp.mp3": new Audio(`mp3/932-A-sharp.mp3`),
  "987-B.mp3": new Audio(`mp3/987-B.mp3`),
};

const keys = document.querySelectorAll(".key");

document.querySelectorAll("p").forEach((p) => (p.innerText = ""));

keys.forEach((key) =>
  key.addEventListener("mousedown", function (e) {
    const key = e.target.closest(".key");

    /* let audio = pianoSounds[key.dataset.value].cloneNode();
    audio.play(); */
    pianoSounds[key.dataset.value].currentTime = 0;
    pianoSounds[key.dataset.value].cloneNode().play();
    e.stopPropagation();
  })
);

//console.log(pianoSounds);

//pianoSounds["261-C.mp3"].play();
/* 
  "261-C.mp3"
  "277-C-sharp.mp3"
  "293-D.mp3"
  "311-D-sharp.mp3"
  "329-E.mp3"
  "349-F.mp3"
  "369F-sharp.mp3"
  "391-G.mp3"
  "415-G-sharp.mp3"
  "440-A.mp3"
  "466-A-sharp.mp3"
  "495-B.mp3"
  "523-C.mp3"
  "545-C-sharp.mp3"
  "587-D.mp3"
  "622-D-sharp.mp3"
  "659-E.mp3"
  "698-F.mp3"
  "698-F-sharp.mp3"
  "783-G.mp3"
  "830-G-sharp.mp3"
  "880-A.mp3"
  "932-A-sharp.mp3"
  "987-B.mp3"
} */

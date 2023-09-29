//Fetch div
const containerEl = document.querySelector(".container");
const career =["YouTuber","Web developer","Free Lancer","Instructor"];

//Let career index be 0
let careerIndex = 0;

let characterIndex = 0;

updateText();
function updateText(){
    //To get all charactors in a word
    characterIndex++;
    //Place article an before Instructor
    containerEl.innerHTML = `<h1>I am ${career[careerIndex].slice(0,1) ==="I" ? "an" : "a"} ${career[careerIndex].slice(0,characterIndex)}</h1>`;
    //Slice returns part of the characters
    

    //To get the next name
    if(characterIndex === career[careerIndex].length)
    {
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === career.length)
    {
        careerIndex = 0;
    }
    setTimeout(updateText,500);
}

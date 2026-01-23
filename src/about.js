export function loadAbout() {
    const content = document.getElementById("content");
    content.textContent = "";

    // section one

    const junoSection = document.createElement("div");
    junoSection.classList = "section box";
    junoSection.id = "aboutDesc";

    const junoHeader = document.createElement("h2");
    junoHeader.textContent = "Who is Juno?";

    const junoSpan = document.createElement("span");
    junoSpan.textContent = `Juno is a brown-colored Shih-Tzu and the heart of our restaurant. 
                Sweet, playful, and a little temperamental (especially when it's medicine time!), 
                Juno represents the warmth and personality we bring into every meal. 
                Proudly 100% Filipino, Juno inspires us to serve comforting food made with love and 
                a touch of fun.`;

    junoSection.appendChild(junoHeader);
    junoSection.appendChild(junoSpan);

    content.appendChild(junoSection);    
 
    //



}
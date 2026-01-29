import junoImage from "./juno1.jpg"

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

    const pictureSection = document.createElement("div");
    pictureSection.className = "section box";

    const junoImg = document.createElement("img");
    junoImg.src = junoImage;
    junoImg.id = "junoimg"
    
    pictureSection.appendChild(junoImg);
    content.appendChild(pictureSection);

    //

    const contactSection = document.createElement("div");
    contactSection.classList = "section box";

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact Us!";

    const emailSpan = document.createElement("span");
    const emailStrong = document.createElement("strong");
    emailStrong.textContent = "E-mail:";
    emailSpan.appendChild(emailStrong);
    emailSpan.append(" lancelav1@gmail.com");

    const numberSpan = document.createElement("span");
    const numberStrong = document.createElement("strong");
    numberStrong.textContent = "Contact No.:";
    numberSpan.appendChild(numberStrong);
    numberSpan.append(" +63 919 488 7035");

    contactSection.appendChild(contactHeader);
    contactSection.appendChild(emailSpan);
    contactSection.appendChild(numberSpan);

    content.appendChild(contactSection);

}
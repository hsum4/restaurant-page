import junoImage from "./juno.jpg"

export function loadHome() {
    const content = document.getElementById('content');

    //////////////////////////////////////////////
    //Section 1 'title'
    const header = document.createElement("div");
    header.className = "section box";

    const headerTextElement = document.createElement("h1");
    headerTextElement.textContent = "Juno's Filipino Cooking";

    header.appendChild(headerTextElement);
    content.appendChild(header);
    /////////////////////////////////////////////
    //Section 2 'description'

    const description = document.createElement("div");
    description.className = "section box";

    const descriptionSpanElement = document.createElement("span");
    descriptionSpanElement.textContent = `Juno's is the kind of place that makes you feel right at home. 
                The warm, inviting atmosphere and the friendly service will have you feeling like you're part of the family. 
                Every bite of their delicious Filipino dishes feels like a comforting hug, 
                just like the love you get from Juno himself. It's the kind of spot you'll 
                want to come back to again and again, whether you're craving classic adobo or something new to try. 
                Juno's Filipino Food is more than just a meal, it's an experience that sticks with you.`;

    const junoImg = document.createElement("img");
    junoImg.src = junoImage;
    junoImg.id = "junoimg";
    junoImg.alt = "a picture of Junoboy the Shih-Tzu!"

    description.appendChild(descriptionSpanElement);
    description.appendChild(junoImg);
    content.appendChild(description);
}
import junoImage from "./juno.jpg"

export function loadHome() {
    const content = document.getElementById('content');

    //Section 1 'title'
    const sectionOne = document.createElement("div");
    sectionOne.className = "section box";

    const headerText = document.createElement("h1");
    headerText.textContent = "Juno's Filipino Cooking";

    sectionOne.appendChild(headerText);
    content.appendChild(sectionOne);

    //Section 2 'description'

    const sectionTwo = document.createElement("div");
    sectionTwo.className = "section box";
    sectionTwo.id = "description";

    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = `Juno's is the kind of place that makes you feel right at home. 
                The warm, inviting atmosphere and the friendly service will have you feeling like you're part of the family. 
                Every bite of their delicious Filipino dishes feels like a comforting hug, 
                just like the love you get from Juno himself. It's the kind of spot you'll 
                want to come back to again and again, whether you're craving classic adobo or something new to try. 
                Juno's Filipino Food is more than just a meal, it's an experience that sticks with you.`;

    const junoImg = document.createElement("img");
    junoImg.src = junoImage;
    junoImg.id = "junoimg";
    junoImg.alt = "a picture of Junoboy the Shih-Tzu!";

    sectionTwo.appendChild(descriptionSpan);
    sectionTwo.appendChild(junoImg);
    content.appendChild(sectionTwo);

    //Section 3

    const sectionThree = document.createElement("div");
    sectionThree.className = "section box";
    sectionThree.id = "hours"

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";

    sectionThree.appendChild(hoursHeader);

    const hours = {
        "Sunday": "8am - 8pm",
        "Monday": "6am - 6pm",
        "Tuesday": "6am - 6pm",
        "Wednesday": "6am - 6pm",
        "Thursday": "6am - 6pm",
        "Friday": "6am - 6pm",
        "Saturday": "8am - 8pm"
    }

    Object.entries(hours).forEach(([key, value]) => {
        const span = document.createElement("span");
        span.textContent = `${key}: ${value}`;
        sectionThree.appendChild(span);
    });
    
    content.appendChild(sectionThree);

    //Section 4

    const sectionFour = document.createElement("div");
    sectionFour.className = "section box";

    const locationHeader = document.createElement("h2");
    locationHeader.textContent = "Location";
    sectionFour.appendChild(locationHeader);

    const locationSpan = document.createElement("span");
    locationSpan.textContent = "Santa Rosa City, Laguna, The Philippines!";
    sectionFour.appendChild(locationSpan);

    content.appendChild(sectionFour);
}
export function loadHome() {
    const content = document.getElementById('content');
    
    const header = document.createElement("div");
    header.className = "section box";

    const headerTextElement = document.createElement("h1");
    headerTextElement.textContent = "Juno's Filipino Cooking";

    header.appendChild(headerTextElement);
    content.appendChild(header);
}
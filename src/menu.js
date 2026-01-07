export function loadMenu() {
    const content = document.getElementById("content");

    //Section one Appetizers
    const appetizersSection = document.createElement('div');
    appetizersSection.classList = "section box";

    const appetizersHeader = document.createElement("h2");
    appetizersHeader.textContent = "Appetizers";

    const appetizersList = document.createElement("ul");
    const appetizers = [
        {name: "Lumpiang Shanghai", description: "Crispy pork spring rolls"},
        {name: "Ukoy", description: "Shrimp and vegetable fritters"},
        {name: "Tokwa't Baboy", description: "Fried tofu and pork in soy-vinger sauce"},
    ]

    appetizers.forEach(item => {
        const li = document.createElement("li");
        const strong = document.createElement("strong");
        
        strong.textContent = `${item.name}`;
        li.appendChild(strong)
        li.append(` - ${item.description}`);
        
        appetizersList.appendChild(li);
    });

    appetizersSection.appendChild(appetizersHeader);
    appetizersSection.appendChild(appetizersList);

    content.appendChild(appetizersSection);

    //section two main courses
}
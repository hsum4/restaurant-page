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
    const coursesSection = document.createElement('div');
    coursesSection.classList = "section box";

    const coursesHeader = document.createElement('h2');
    coursesHeader.textContent = "Main Courses";

    const coursesList = document.createElement('ul');
    const courses = [
        {name: "Chicken Adobo", description: "Chicken simmered in soy sauce and vinegar"},
        {name: "Sinigang na Baboy", description: "Pork in a sour tamarind broth"},
        {name: "Lechon Kawali", description: "Crispy deep-fried pork belly"},
        {name: "Garlic Fried Rice", description: "Grilled marinated rice"}
    ]

    courses.forEach(item => {
        const li = document.createElement("li");
        const strong = document.createElement("strong");

        strong.textContent = `${item.name}`
        li.appendChild(strong);
        li.append(` - ${item.description}`);

        coursesList.appendChild(li);
    });

    coursesSection.appendChild(coursesHeader);
    coursesSection.appendChild(coursesList);

    content.appendChild(coursesSection);

    //section three rice&noodles
    const riceNoodlesSection = document.createElement('div');
    riceNoodlesSection.classList = "section box";

    const riceNoodlesHeader = document.createElement("h2")
    riceNoodlesHeader.textContent = "Rice & Noodles";

    const riceNoodlesList = document.createElement("ul");
    const riceNoodles = [
        {name: "Pancit Canton", description: "Stir-fried egg noodles with meat and vegetable"},
        {name: "Pancit Bihon", description: "Stir-fried rice noodles"},
        {name: "Arroz Caldo", description: "Chicken rice porridge"},
        {name: "Garlic Fried Rice", description: "Filipino-style fried rice "}
    ]

    riceNoodles.forEach(item => {
        const li = document.createElement("li");
        const strong = document.createElement("strong");

        strong.textContent = `${item.name}`;
        li.appendChild(strong);
        li.append(` - ${item.description}`);

        riceNoodlesList.appendChild(li);
    })

    riceNoodlesSection.appendChild(riceNoodlesHeader);
    riceNoodlesSection.appendChild(riceNoodlesList);

    content.appendChild(riceNoodlesSection);

}
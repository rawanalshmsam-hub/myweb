const recipes = [
    { 
        name: "Spaghetti Aglio e Olio", 
        ingredients: ["Pasta", "Garlic", "Olive Oil"], 
        time: "15 MINS", 
        servings: "2 SERVINGS",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500"
    },
    { 
        name: "Margherita Pizza", 
        ingredients: ["Dough", "Tomato", "Mozzarella"], 
        time: "25 MINS", 
        servings: "4 SERVINGS",
        img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500"
    }
];

function searchRecipe() {
    const query = document.getElementById("search").value.toLowerCase();
    const container = document.getElementById("results");
    container.innerHTML = "";

    const filtered = recipes.filter(r => r.name.toLowerCase().includes(query));

    filtered.forEach(r => {
        container.innerHTML += `
            <div class="recipe-card">
                <img src="${r.img}" alt="${r.name}">
                <div class="card-content">
                    <span style="color: #ff6347; font-size: 0.8rem; font-weight: bold;">${r.time} • ${r.servings}</span>
                    <h3 style="margin: 10px 0;">${r.name}</h3>
                    <p style="color: #666; font-size: 0.9rem;">${r.ingredients.join(", ")}</p>
                </div>
            </div>
        `;
    });
}

// Show all recipes on first load
searchRecipe();
